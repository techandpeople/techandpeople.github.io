---
###############
# DO NOT EDIT
layout: project
###############

###############
# TO EDIT
# project title
title: Smartphone Accessibility

# project image
image:
  name: hybrid.jpg
  alt-text: "Braille I/O" # provide a description for the image #a11y

# short description of the project
description: Best project ever!
summary: ...Summary place older...

# nickname of the person set in data/team_members.yml
people:
  - arbs
  - afpr

# project code
code: smartphone_accessibility

# area for filter purpose
area: access
###############

###############
# actual page
---
Virtual reality (VR) video applications couple complex camera systems and head-mounted devices with computational photography algorithms to generate immersive, panoramic video.
Rendering 3D-360◦ VR video from a camera rig is computation-intensive and typically performed offline.
Moreover, efficiently managing the resulting VR videos for low-bandwidth viewing is challenging.

## LightDB
We are designing a database management system, LightDB, to efficiently ingest, store, and deliver VR content at scale.
LightDB targets both live and prerecorded light field and 360◦ VR videos.
Content delivered through LightDB requires up to 60% less bandwidth than existing methods and scales to many concurrent connections.

## Hardware-Friendly Bilateral Solving
We have designed a new algorithm, the hardware-friendly bilateral solver, that enables real-time 3D-360◦ VR video rendering.
Our algorithm is easily parallelized, achieving a 4x speedup on CPU and 32x speedup on GPU over a baseline CPU implementation.
We also designed an FPGA-based hardware accelerator that utilizes reduced-precision computation and the parallelism inherent in our algorithm to achieve further speedups over our CPU and GPU implementations while consuming an order of magnitude less power.
The FPGA design's power efficiency enables practical real-time VR video processing at the camera rig or in the cloud.



