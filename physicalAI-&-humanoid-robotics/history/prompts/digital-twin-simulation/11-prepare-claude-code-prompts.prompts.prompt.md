---
id: 11
title: prepare-claude-code-prompts
stage: prompts
date: 2026-01-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: digital-twin-simulation
branch: 002-digital-twin-simulation
user: Claude
command: sp.prompts
labels: [simulation, digital-twin, gazebo, unity, robotics, prompts]
links:
  spec: specs/002-digital-twin-simulation/spec.md
  plan: specs/002-digital-twin-simulation/plan.md
  ticket: null
  adr: null
  pr: null
files:
 - .specify/prompts/digital-twin-simulation.md
tests:
 - none
---

## Prompt

Create Claude Code prompts for Module 2: The Digital Twin (Gazebo & Unity) that enforce the following requirements from the specification:

1. Reference Module 2 spec explicitly
2. Enforce formal, instructional tone
3. Explicitly forbid:
   - Game development tutorials
   - Implementation details
   - Vendor lock-in
4. Focus on simulator-agnostic principles
5. Maintain consistency with Module 1 terminology
6. Emphasize the distinction between physical accuracy (Gazebo) and visual realism (Unity)

The prompts should enable Claude Code to generate content that:
- Explains digital twin concepts accurately
- Covers physics simulation principles without implementation details
- Describes sensor simulation conceptually
- Maintains the biological nervous system analogy from Module 1
- Follows the formal definition of a digital twin as "a continuously synchronized virtual representation of a physical robotic system, including its body, sensors, environment, and interactions"

## Response

Created Claude Code prompts for Module 2 that reference the specification and enforce the required constraints. The prompts ensure content remains conceptual, simulator-agnostic, and consistent with the formal tone required for the educational material.

## Outcome

- ✅ Impact: Created reusable Claude Code prompts for digital twin content generation
- 🧪 Tests: N/A
- 📁 Files: Created .specify/prompts/digital-twin-simulation.md
- 🔁 Next prompts: Ready for content generation phase
- 🧠 Reflection: Prompts properly constrain Claude Code to follow spec requirements

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): Standard constraint-based prompt
- Next experiment (smallest change to try): Use prompts for content generation
