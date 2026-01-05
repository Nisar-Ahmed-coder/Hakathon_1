// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1 - The Robotic Nervous System (ROS 2)',
      items: [
        'module-1/index',
        'module-1/ros2-overview',
        'module-1/nodes-topics-services',
        'module-1/python-to-ros',
        'module-1/urdf-humanoids'
      ],
    },
    {
      type: 'category',
      label: 'Module 2 - The Digital Twin (Gazebo & Unity)',
      items: [
        'module-2/index',
        'module-2/digital-twin-concept',
        'module-2/gazebo-physics',
        'module-2/unity-visualization',
        'module-2/sensor-simulation'
      ],
    },
    {
      type: 'category',
      label: 'Module 3 - The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module-3/index',
        'module-3/ai-robot-brain-concept',
        'module-3/isaac-sim-training',
        'module-3/isaac-ros-runtime',
        'module-3/nav2-humanoid-navigation'
      ],
    },
    {
      type: 'category',
      label: 'Module 4 - Vision-Language-Action (VLA) Execution Framework',
      items: [
        'module-4/index',
        'module-4/vla-concept',
        'module-4/voice-to-action',
        'module-4/cognitive-planning',
        'module-4/capstone-autonomous-humanoid'
      ],
    },
  ],
};

module.exports = sidebars;