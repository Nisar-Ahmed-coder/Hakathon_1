---
sidebar_position: 5
---

# Humanoid Modeling with URDF

## Purpose of URDF

URDF (Unified Robot Description Format) is a structural and kinematic description language that serves as the single source of truth for robot morphology. It defines the physical structure of a robot, including its links, joints, and other properties.

## URDF Components

### Links (Bones)

Links represent rigid bodies in the robot model. In the biological analogy, links are equivalent to bones in a skeleton.

```xml
<link name="link_name">
  <inertial>
    <mass value="1.0" />
    <origin xyz="0 0 0.5" rpy="0 0 0" />
    <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0" />
  </inertial>
  <visual>
    <origin xyz="0 0 0" rpy="0 0 0" />
    <geometry>
      <box size="1 1 1" />
    </geometry>
  </visual>
  <collision>
    <origin xyz="0 0 0" rpy="0 0 0" />
    <geometry>
      <box size="1 1 1" />
    </geometry>
  </collision>
</link>
```

### Joints (Degrees of Freedom)

Joints define the connections between links and specify the degrees of freedom for movement. In the biological analogy, joints represent the connections between bones that allow for movement.

```xml
<joint name="joint_name" type="revolute">
  <parent link="parent_link" />
  <child link="child_link" />
  <origin xyz="0 0 1" rpy="0 0 0" />
  <axis xyz="0 0 1" />
  <limit lower="-1.57" upper="1.57" effort="100" velocity="1" />
</joint>
```

Joint types include:
- **Fixed**: No movement allowed
- **Revolute**: Single axis rotation (like a hinge)
- **Continuous**: Continuous rotation (like a wheel)
- **Prismatic**: Linear sliding motion
- **Floating**: 6 degrees of freedom
- **Planar**: Movement on a plane

### Inertial Properties

Inertial properties define the mass distribution of each link, which is important for simulation and control:

- Mass: The mass of the link
- Origin: The center of mass location
- Inertia matrix: How mass is distributed throughout the link

### Visual vs Collision Geometry

URDF distinguishes between visual and collision geometry:

- **Visual geometry**: Defines how the link appears in visualizations
- **Collision geometry**: Defines how the link interacts with other objects in collision detection

## Humanoid-Specific Constraints

### Symmetry Constraints

Humanoid robots typically have bilateral symmetry, which should be reflected in the URDF model. This means that left and right sides of the robot (arms, legs, etc.) are mirror images of each other.

### Joint Limits for Humanoid Motion

Joint limits should be set to reflect both the mechanical limits of the robot and the desired range of motion for humanoid behavior:

```xml
<limit lower="-2.0" upper="2.0" effort="100" velocity="2" />
```

These limits ensure that:
- The robot stays within safe operational ranges
- Movements remain within human-like ranges for humanoid applications
- Mechanical components are not damaged

### Mapping URDF Joints to ROS Controllers

URDF joints need to be mapped to ROS controllers to enable actual robot control:

```xml
<transmission name="joint1_transmission">
  <type>transmission_interface/SimpleTransmission</type>
  <joint name="joint1">
    <hardwareInterface>hardware_interface/PositionJointInterface</hardwareInterface>
  </joint>
  <actuator name="joint1_motor">
    <hardwareInterface>hardware_interface/PositionJointInterface</hardwareInterface>
    <mechanicalReduction>1</mechanicalReduction>
  </actuator>
</transmission>
```

## Biological Analogy Maintenance

Throughout the URDF model, the biological analogy is maintained:
- **Bones** → **Links**: Rigid structural components
- **Joints** → **Degrees of freedom**: Connections allowing movement
- **Muscle attachments** → **Actuator connections**: Points where forces are applied

## Example URDF for a Simple Humanoid

```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">
  <!-- Base link -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.2 0.2 0.2"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <box size="0.2 0.2 0.2"/>
      </geometry>
    </collision>
  </link>

  <!-- Torso -->
  <link name="torso">
    <visual>
      <geometry>
        <box size="0.2 0.1 0.4"/>
      </geometry>
    </visual>
  </link>

  <joint name="torso_joint" type="fixed">
    <parent link="base_link"/>
    <child link="torso"/>
    <origin xyz="0 0 0.3"/>
  </joint>

  <!-- Head -->
  <link name="head">
    <visual>
      <geometry>
        <sphere radius="0.1"/>
      </geometry>
    </visual>
  </link>

  <joint name="neck_joint" type="revolute">
    <parent link="torso"/>
    <child link="head"/>
    <origin xyz="0 0 0.25"/>
    <axis xyz="0 1 0"/>
    <limit lower="-0.5" upper="0.5" effort="10" velocity="1"/>
  </joint>
</robot>
```

This example demonstrates the basic structure of a humanoid robot URDF, with links representing body parts and joints allowing for appropriate movement.