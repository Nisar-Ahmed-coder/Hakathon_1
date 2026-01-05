# Data Model: The Robotic Nervous System (ROS 2)

## Overview
This document defines the conceptual data models and entities for Module 1, focusing on ROS 2 as the nervous system of robotic platforms. Since this is a conceptual educational module, the "data model" refers to the key concepts and their relationships that students need to understand.

## 1. Core ROS 2 Entities

### 1.1 ROS 2 Node
- **Definition**: Execution unit of a ROS 2 program that performs specific functions, analogous to neurons in a biological nervous system
- **Attributes**:
  - Name: Unique identifier for the node
  - Namespace: Hierarchical organization for the node
  - Lifecycle State: Unconfigured, Inactive, Active, or Finalized
  - Publishers: List of topics the node publishes to
  - Subscribers: List of topics the node subscribes to
  - Services: List of services the node provides
  - Clients: List of services the node calls
- **Relationships**:
  - Contains: Publishers, Subscribers, Services, Clients
  - Communicates with: Other nodes via topics and services
- **Validation Rules**: Each node should have a single, well-defined purpose and responsibility boundaries

### 1.2 ROS 2 Topic
- **Definition**: Communication channel for asynchronous data streaming, analogous to synapses that transmit signals between neurons
- **Attributes**:
  - Name: Unique identifier for the topic
  - Message Type: Strongly typed message definition (.msg file)
  - Quality of Service (QoS): Configuration for reliability, durability, etc.
  - Publishers: List of nodes publishing to this topic
  - Subscribers: List of nodes subscribing to this topic
- **Relationships**:
  - Connected to: Publishers (one-to-many)
  - Connected to: Subscribers (one-to-many)
- **Validation Rules**: Message types must be compatible between publishers and subscribers

### 1.3 ROS 2 Service
- **Definition**: Synchronous request-response communication pattern, analogous to reflex arcs that provide immediate responses
- **Attributes**:
  - Name: Unique identifier for the service
  - Service Type: Strongly typed service definition (.srv file)
  - Request Type: Format of the request message
  - Response Type: Format of the response message
  - Server: Node providing the service
  - Clients: List of nodes calling this service
- **Relationships**:
  - Provided by: One server node
  - Used by: Multiple client nodes
- **Validation Rules**: Service requests must have corresponding responses

## 2. AI Agent and Communication Entities

### 2.1 AI Agent
- **Definition**: High-level decision-making system implemented in Python that requires interfacing with robot hardware through proper middleware abstractions
- **Attributes**:
  - Name: Identifier for the AI agent
  - Decision Logic: High-level planning and reasoning capabilities
  - ROS Interface: Connection to ROS 2 through rclpy
  - Safety Constraints: Limitations on direct hardware control
- **Relationships**:
  - Connects to: rclpy Node for ROS communication
  - Communicates with: Controller Nodes through ROS topics/services
- **Validation Rules**: AI agents must not directly control hardware; all hardware interaction must occur through ROS controllers

### 2.2 rclpy Node
- **Definition**: Specialized ROS 2 node that interfaces between Python-based AI agents and the ROS 2 middleware
- **Attributes**:
  - Name: Identifier for the rclpy node
  - Event Loop: Mechanism for processing callbacks
  - Executor Type: SingleThreadedExecutor or MultiThreadedExecutor
  - Message Handlers: Callback functions for processing messages
- **Relationships**:
  - Connected to: AI Agent (upstream)
  - Connected to: ROS 2 Topics/Services (downstream)
- **Validation Rules**: Must properly serialize messages between Python objects and ROS message formats

### 2.3 Controller Node
- **Definition**: Low-level system that directly interacts with hardware actuators and sensors, providing the interface between middleware and physical components
- **Attributes**:
  - Name: Identifier for the controller node
  - Hardware Interface: Direct connection to physical actuators/sensors
  - Control Type: Position, velocity, or effort control
  - Safety Features: Emergency stop, joint limits, etc.
- **Relationships**:
  - Receives from: ROS 2 Topics/Services
  - Controls: Actuators
  - Monitors: Sensors
- **Validation Rules**: Must enforce safety constraints and hardware limits

## 3. URDF Robot Model Entities

### 3.1 URDF Model
- **Definition**: Structural and kinematic description of robot morphology that serves as the single source of truth for robot configuration
- **Attributes**:
  - Name: Identifier for the robot model
  - Links: Collection of rigid bodies
  - Joints: Collection of connections between links
  - Materials: Visual appearance definitions
  - Transmissions: Mapping between joints and actuators
- **Relationships**:
  - Contains: Links, Joints, Materials
  - Defines: Robot kinematics and dynamics
- **Validation Rules**: Must be a valid XML document conforming to URDF schema

### 3.2 URDF Link
- **Definition**: Rigid body in the robot model, analogous to bones in biological systems
- **Attributes**:
  - Name: Unique identifier for the link
  - Inertial Properties: Mass, center of mass, inertia tensor
  - Visual Geometry: Shape and appearance for visualization
  - Collision Geometry: Shape for collision detection
  - Origin: Position and orientation relative to parent joint
- **Relationships**:
  - Connected by: Joints (parent and child)
  - Part of: URDF Model
- **Validation Rules**: Must have valid inertial properties and geometry definitions

### 3.3 URDF Joint
- **Definition**: Connection between two links that defines degrees of freedom, analogous to joints in biological systems
- **Attributes**:
  - Name: Unique identifier for the joint
  - Type: Fixed, Revolute, Continuous, Prismatic, etc.
  - Parent Link: Link that is closer to the root of the kinematic chain
  - Child Link: Link that is further from the root of the kinematic chain
  - Axis: Movement axis for the joint
  - Limits: Range of motion constraints
- **Relationships**:
  - Connects: Parent Link and Child Link
  - Part of: URDF Model
  - Maps to: ROS Controller
- **Validation Rules**: Joint limits must be physically realistic and consistent with robot design

## 4. Communication Pipeline Entity

### 4.1 AI-to-Control Pipeline
- **Definition**: The required communication pattern that ensures AI agents do not directly control hardware
- **Attributes**:
  - Stage 1: AI Agent (Python)
  - Stage 2: rclpy Node
  - Stage 3: ROS Topic/Service
  - Stage 4: Controller Node
  - Stage 5: Actuator
- **Relationships**:
  - Sequential flow from AI Agent to Actuator
  - Each stage has specific responsibilities and constraints
- **Validation Rules**:
  - No direct connection between AI Agent and Actuator
  - All communication must flow through the specified pipeline
  - Each stage must validate and process information appropriately

## 5. State and Configuration Models

### 5.1 Node Lifecycle State
- **Definition**: The operational state of a ROS 2 node in its lifecycle
- **Attributes**:
  - State Name: Unconfigured, Inactive, Active, Finalized
  - Transitions: Valid transitions to other states
  - Operations: Available operations in each state
- **Relationships**:
  - Part of: ROS 2 Node lifecycle
- **Validation Rules**: State transitions must follow the defined lifecycle pattern

### 5.2 Quality of Service (QoS) Profile
- **Definition**: Configuration settings that define communication behavior for topics and services
- **Attributes**:
  - Reliability: Reliable or best-effort delivery
  - Durability: Volatile or transient local durability
  - History: Keep-all or keep-last policy
  - Depth: Size of the history queue
- **Relationships**:
  - Applied to: Topics and Services
- **Validation Rules**: QoS settings must be compatible between publishers and subscribers

## 6. Humanoid-Specific Constraints

### 6.1 Symmetry Constraints
- **Definition**: Bilateral symmetry requirements for humanoid robot models
- **Attributes**:
  - Left Side: Configuration for left-side components
  - Right Side: Configuration for right-side components
  - Symmetry Type: Mirror or rotational symmetry
- **Relationships**:
  - Applied to: URDF Model and Joints
- **Validation Rules**: Left and right sides must be symmetrical in design

### 6.2 Joint Limit Constraints
- **Definition**: Range of motion constraints specific to humanoid motion
- **Attributes**:
  - Minimum Value: Lower bound for joint movement
  - Maximum Value: Upper bound for joint movement
  - Safety Margin: Buffer for safe operation
- **Relationships**:
  - Applied to: URDF Joints
  - Enforced by: Controller Nodes
- **Validation Rules**: Joint limits must be within physical capabilities of the robot