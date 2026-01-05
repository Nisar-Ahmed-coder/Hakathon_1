# Data Model: The Digital Twin (Gazebo & Unity)

## Overview
This document defines the conceptual data models and entities for Module 2, focusing on digital twins for humanoid robots using physics-accurate simulation and high-fidelity virtual environments. Since this is a conceptual educational module, the "data model" refers to the key concepts and their relationships that students need to understand.

## 1. Core Digital Twin Entities

### 1.1 Digital Twin
- **Definition**: A continuously synchronized virtual representation of a physical robotic system, including its body, sensors, environment, and interactions
- **Attributes**:
  - Physical System: The real-world robot and environment being represented
  - Virtual Representation: The simulation model
  - Synchronization: The process that keeps virtual and physical systems aligned
  - Sensors: Virtual sensors that mirror real sensors
  - Environment: Virtual environment that matches the physical one
- **Relationships**:
  - Contains: Robot Models, Sensor Models, Environment Models
  - Interacts with: Physical Robot System
- **Validation Rules**: Must maintain continuous synchronization with physical system

### 1.2 Physics Simulation
- **Definition**: A system that models real-world physics including gravity, collisions, and rigid-body dynamics to create accurate behavioral representations
- **Attributes**:
  - Gravity Modeling: Simulation of gravitational forces
  - Rigid-Body Dynamics: Modeling of solid objects with defined mass and properties
  - Contact Forces: Simulation of forces when objects interact
  - Collision Detection: Identifying when objects come into contact
  - World Frames: Coordinate systems for spatial relationships
- **Relationships**:
  - Used by: Digital Twin for physical behavior
  - Applied to: Robot Models and Environment Models
- **Validation Rules**: Must remain simulator-agnostic in principle

### 1.3 Visual Rendering
- **Definition**: A system that provides high-fidelity visual representation and interaction capabilities for human-robot interaction studies
- **Attributes**:
  - Real-time Rendering: High-performance visual generation
  - Interaction Engine: Capabilities for human-robot interaction
  - Visual Quality: High-fidelity appearance
  - Human Avatars: Realistic representation of humans
- **Relationships**:
  - Complements: Physics Simulation (visual vs physical)
  - Used for: Human-Robot Interaction Studies
- **Validation Rules**: Should not be presented as a physics authority

## 2. Simulation-Specific Entities

### 2.1 Simulated Sensors
- **Definition**: Virtual sensors that conceptually replicate real-world sensors (LiDAR, depth cameras, IMUs) with appropriate noise modeling and constraints
- **Attributes**:
  - Sensor Type: LiDAR, depth camera, IMU, etc.
  - Noise Modeling: Realistic sensor noise characteristics
  - Sampling Rates: Update frequency matching real sensors
  - Field of View: Sensing limitations and constraints
  - Data Format: Output format matching real sensors
- **Relationships**:
  - Part of: Digital Twin
  - Publish to: ROS 2 Topics
  - Based on: Real World Sensor Specifications
- **Validation Rules**: Must remain conceptual, not implementation-specific

### 2.2 Robot Models
- **Definition**: Digital representations of physical robots, typically defined using URDF, that include kinematic and dynamic properties
- **Attributes**:
  - Kinematic Properties: Joint types, ranges of motion, link connections
  - Dynamic Properties: Mass, center of mass, moments of inertia
  - Visual Geometry: Appearance for rendering
  - Collision Geometry: Physics interaction shapes
  - Joint Constraints: Mechanical limitations from URDF
- **Relationships**:
  - Used by: Physics Simulation
  - Part of: Digital Twin
  - Based on: Physical Robot Design
- **Validation Rules**: Must include both kinematic and dynamic properties

### 2.3 Physics Parameters
- **Definition**: Values that define how physical forces and interactions behave in the simulation environment
- **Attributes**:
  - Gravity: Gravitational acceleration values
  - Friction: Coefficients for contact forces
  - Contact Properties: Parameters for collision responses
  - Material Properties: Physical characteristics of objects
- **Relationships**:
  - Applied to: Physics Simulation
  - Used by: Robot Models, Environment Models
- **Validation Rules**: Must accurately reflect real-world physics

## 3. Sensor Simulation Entities

### 3.1 LiDAR Simulation
- **Definition**: Virtual LiDAR sensor that simulates laser scanning and point cloud generation
- **Attributes**:
  - Ray-Casting Principles: Method for simulating laser beams
  - Point Cloud Generation: Creating 3D point data
  - Field of View: Angular coverage of the sensor
  - Range: Maximum and minimum detection distances
  - Resolution: Angular resolution of the sensor
- **Relationships**:
  - Part of: Simulated Sensors
  - Uses: Physics Simulation for environment interaction
- **Validation Rules**: Must follow ray-casting principles for accurate simulation

### 3.2 Depth Camera Simulation
- **Definition**: Virtual depth camera that simulates depth image generation
- **Attributes**:
  - Depth Image Generation: Creating depth map data
  - Occlusion Handling: Managing hidden surfaces
  - Resolution: Image resolution parameters
  - Field of View: Angular coverage
  - Accuracy: Depth measurement precision
- **Relationships**:
  - Part of: Simulated Sensors
  - Uses: Visual Rendering for scene analysis
- **Validation Rules**: Must properly handle occlusions and depth accuracy

### 3.3 IMU Simulation
- **Definition**: Virtual IMU that simulates accelerometers and gyroscopes with drift and bias
- **Attributes**:
  - Accelerometers: Linear acceleration measurements
  - Gyroscopes: Angular velocity measurements
  - Drift Modeling: Long-term sensor bias changes
  - Noise Characteristics: Realistic sensor noise patterns
  - Sampling Rate: Update frequency
- **Relationships**:
  - Part of: Simulated Sensors
  - Uses: Physics Simulation for motion data
- **Validation Rules**: Must include realistic drift and bias modeling

## 4. Integration Entities

### 4.1 ROS 2 Interface
- **Definition**: The connection between simulated systems and the ROS 2 ecosystem
- **Attributes**:
  - Topic Publishing: Simulated sensors publish to ROS 2 topics
  - Message Formats: Matching real sensor message types
  - Simulation-Agnostic: Controllers work with both real and simulated data
  - Compatibility: Maintaining identical pipelines for real and simulated data
- **Relationships**:
  - Connects: Simulated Sensors to ROS 2 Ecosystem
  - Used by: Controllers and Higher-Level Software
- **Validation Rules**: Real and simulated pipelines must appear identical to higher-level software

### 4.2 Environment Models
- **Definition**: Virtual representations of the physical environment where robots operate
- **Attributes**:
  - Physical Properties: Gravity, friction, material characteristics
  - Visual Properties: Appearance for rendering
  - Collision Properties: Interaction shapes for physics
  - Static/Dynamic Objects: Fixed and moving elements
- **Relationships**:
  - Part of: Digital Twin
  - Used by: Physics Simulation, Visual Rendering
- **Validation Rules**: Must accurately represent physical environment properties

## 5. Human-Robot Interaction Entities

### 5.1 Human Avatars
- **Definition**: Virtual representations of humans for interaction studies
- **Attributes**:
  - Visual Appearance: Realistic human rendering
  - Movement Patterns: Natural human motion
  - Interaction Behaviors: Predictable human actions
  - Detection Characteristics: How robots perceive humans
- **Relationships**:
  - Part of: Environment Models
  - Used in: Human-Robot Interaction Studies
- **Validation Rules**: Should provide realistic interaction scenarios

### 5.2 Interaction Scenarios
- **Definition**: Structured situations for testing human-robot interaction
- **Attributes**:
  - Scenario Type: Different interaction contexts
  - Success Criteria: Measures of successful interaction
  - Safety Considerations: Ensuring safe robot responses
  - Perception Validation: Testing robot sensor responses
- **Relationships**:
  - Use: Human Avatars, Robot Models
  - Validate: Digital Twin Effectiveness
- **Validation Rules**: Must provide realistic and safe interaction testing