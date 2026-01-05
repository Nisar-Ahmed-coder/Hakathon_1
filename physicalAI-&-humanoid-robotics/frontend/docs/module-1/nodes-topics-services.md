---
sidebar_position: 3
---

# Nodes, Topics, and Services

## ROS 2 Core Primitives

In ROS 2, there are three fundamental communication primitives that form the backbone of the robotic nervous system. Understanding these concepts is crucial for building effective robotic applications.

## Nodes - The Processing Units (Neurons)

Nodes are the execution units of a ROS 2 program. They can be thought of as neurons in a biological nervous system, processing information and communicating with other nodes.

### Node Lifecycle

ROS 2 nodes follow a specific lifecycle:
- **Unconfigured**: Initial state when the node is created
- **Inactive**: Node is configured but not yet active
- **Active**: Node is running and participating in communication
- **Finalized**: Node is shutting down

### Node Composition

Multiple nodes can be composed into a single process for efficiency:
- Reduces communication overhead
- Improves performance for tightly coupled components
- Maintains logical separation while sharing resources

### Namespaces and Isolation

Nodes can be organized using namespaces:
- Provides hierarchical organization
- Prevents naming conflicts
- Enables reusability of node components

### Responsibility Boundaries

Each node should have a single, well-defined purpose:
- Follows the single responsibility principle
- Makes nodes easier to test and maintain
- Improves system modularity

## Topics - Asynchronous Communication (Synapses)

Topics enable asynchronous communication between nodes using a publish-subscribe model, similar to how synapses transmit signals between neurons.

### Publisher-Subscriber Model

- **Publishers** send messages to a topic
- **Subscribers** receive messages from a topic
- Communication is decoupled in time and space
- Multiple publishers and subscribers can exist for the same topic

### Message Typing and Contracts

- Messages are strongly typed using `.msg` definitions
- Ensures type safety between publishers and subscribers
- Provides clear contracts for data exchange

### Asynchronous Communication

- Non-blocking communication pattern
- Allows for concurrent processing
- Suitable for sensor data streaming and control signals

### Quality of Service (QoS) Profiles

Different communication requirements can be specified:
- Reliability: Reliable vs. best-effort delivery
- Durability: Volatile vs. transient local durability
- History: Keep-all vs. keep-last policies

## Services - Synchronous Communication (Reflex Arcs)

Services provide synchronous request-response communication, similar to reflex arcs in biological systems that provide immediate responses.

### Request-Response Semantics

- Client sends a request to a service
- Service processes the request and returns a response
- Communication is blocking from the client's perspective

### Synchronous vs Asynchronous Service Calls

- **Synchronous**: Client waits for response before continuing
- **Asynchronous**: Client continues while processing request in background

### Use Cases

Services are appropriate for:
- Configuration operations
- State queries
- Command execution requiring acknowledgment
- Operations that need guaranteed completion

## Practical Example

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String
from example_interfaces.srv import AddTwoInts

class DemoNode(Node):
    def __init__(self):
        super().__init__('demo_node')

        # Publisher (Topic communication)
        self.publisher = self.create_publisher(String, 'topic_name', 10)

        # Subscriber (Topic communication)
        self.subscriber = self.create_subscription(
            String, 'topic_name', self.callback, 10)

        # Service server
        self.service = self.create_service(
            AddTwoInts, 'service_name', self.service_callback)

    def callback(self, msg):
        self.get_logger().info(f'Received: {msg.data}')

    def service_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'Returning: {response.sum}')
        return response
```