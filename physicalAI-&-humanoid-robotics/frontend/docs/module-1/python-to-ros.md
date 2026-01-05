---
sidebar_position: 4
---

# Python AI Agents to ROS Controllers

## rclpy Integration

This section describes how Python-based AI agents interface with ROS 2 using rclpy, the Python client library for ROS 2.

### How Python-based AI Agents Interface with ROS 2

rclpy provides the bridge between Python-based AI systems and the ROS 2 middleware, allowing high-level decision-making algorithms to communicate with robotic systems.

### Event Loops and Executors

ROS 2 uses an event-driven architecture for processing callbacks:

- **SingleThreadedExecutor**: Processes callbacks sequentially in a single thread
- **MultiThreadedExecutor**: Processes callbacks in parallel using a thread pool

Example of executor usage:
```python
import rclpy
from rclpy.executors import SingleThreadedExecutor, MultiThreadedExecutor

def main():
    rclpy.init()
    node = YourNode()

    # Using SingleThreadedExecutor
    executor = SingleThreadedExecutor()
    executor.add_node(node)
    try:
        executor.spin()
    finally:
        executor.shutdown()
        node.destroy_node()
        rclpy.shutdown()
```

### Callback-Driven Architectures

ROS 2 uses a callback-driven model where functions are executed in response to messages, services, or other events:

```python
class AIAgentNode(Node):
    def __init__(self):
        super().__init__('ai_agent_node')

        # Subscribe to sensor data
        self.subscription = self.create_subscription(
            String, 'sensor_data', self.sensor_callback, 10)

        # Create publisher for commands
        self.publisher = self.create_publisher(String, 'command_topic', 10)

    def sensor_callback(self, msg):
        # Process sensor data with AI logic
        ai_decision = self.process_with_ai(msg.data)

        # Publish command based on AI decision
        command_msg = String()
        command_msg.data = ai_decision
        self.publisher.publish(command_msg)
```

### Message Serialization Boundaries

rclpy handles the conversion between Python objects and ROS messages automatically. When sending data, Python objects are serialized into ROS message format, and when receiving data, ROS messages are deserialized into Python objects.

## The AI-to-Control Pipeline

The following pipeline MUST be followed to ensure safety and proper separation of concerns:

```
AI Agent (Python) → rclpy Node → ROS Topic / Service → Controller Node → Actuator
```

### The Required Architecture

The constraint is that **Python agents MUST NOT directly control hardware**. All hardware interaction SHALL occur through ROS controllers.

### AI Agent Responsibilities

- High-level decision making and planning
- Processing sensor data for strategic decisions
- Sending commands to controller nodes via ROS topics/services
- Monitoring system state and adjusting plans

### rclpy Node Responsibilities

- Acting as the communication bridge between AI and ROS
- Handling message serialization/deserialization
- Managing ROS communication patterns (publishers/subscribers/services)
- Providing a clean interface for the AI agent

### Controller Node Responsibilities

- Translating high-level commands into low-level hardware commands
- Ensuring safety constraints are met
- Providing feedback to the AI agent
- Direct interaction with actuators and sensors

## Implementation Pattern

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class AIToROSInterface(Node):
    def __init__(self):
        super().__init__('ai_to_ros_interface')

        # Publisher to send AI decisions to controllers
        self.ai_publisher = self.create_publisher(String, 'ai_commands', 10)

        # Subscriber to receive sensor data from robots
        self.sensor_subscriber = self.create_subscription(
            String, 'sensor_data', self.sensor_callback, 10)

        # Service client to interact with controllers if needed
        self.controller_client = self.create_client(
            YourServiceType, 'controller_service')

    def sensor_callback(self, msg):
        # Process sensor data with AI logic
        ai_decision = self.ai_process(msg.data)

        # Send decision through ROS to controller
        # This maintains the required pipeline
        command_msg = String()
        command_msg.data = ai_decision
        self.ai_publisher.publish(command_msg)

    def ai_process(self, sensor_data):
        # Placeholder for AI decision logic
        # This is where your AI algorithm would process the data
        return f"Action based on: {sensor_data}"

def main(args=None):
    rclpy.init(args=args)
    interface_node = AIToROSInterface()

    # Run the interface (this would typically include AI processing loops)
    rclpy.spin(interface_node)

    interface_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

This implementation ensures that the AI agent never directly controls hardware, maintaining the required separation of concerns for safety and maintainability.