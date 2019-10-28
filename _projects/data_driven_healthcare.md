---
###############
# DO NOT EDIT
layout: project
###############

###############
# TO EDIT
# project title
title: Data-Driven Healthcare

# project imageA
image:
 name: mainParkinsonBlurred.jpg
 alt-text: "Clinical Assessemnt using Datapark" # provide a short description for the image #a11y

# short description of the project
description: "Our goal is to increase and improve the information clinicians and patients have access. We explore and develop mechanisms for collecting, processing, and analyzing the data. We also have a huge concern on how the information is presented."

# people associated with the project
people:
 - djrb
 - tjvg
 - saa

# project code
code: data_driven_healthcare

# area for filter purpose
area: health
###############

###############
# actual page
---
## Data-Driven
When building tools for clinicians to use we have to understand that they have a limited amount of time for dealing with the information technology provides because they have to get their focus on the patient. Our approach is to build tools that are easy to understand but have all the information needed. 
We also consider the patient as a fundamental part of our research. So, we develop specific tools considering their point of view. 
In both clinicians and patients, the visualization and how the information is shown is one of our concerns. 
## Detection of Objective Measures
We aim to detect objective measures related directly or indirectly with symptoms. For now, we detect patient’s movement throughout the day, physical activity, sleep, and clinical assessments related measures. 
We are exploring new ways for activity recognition and specific symptoms detection like FoG (Freeze of Gait).
## Datapark
Datapark is a web platform available for clinicians that allow them to have access to detailed reports (that can be printed and delivered to patients) of both clinical assessments and when patients are on their daily life. Patients wear an accelerometer device on their wrist or trunk and then we process and analyze the data producing the reports. All the platform is interactive. Clinicians can build their reports, by choosing the charts and measures that can be part of it. 
Another branch of Datapark is the ability for clinicians to build questionnaires and send them directly to patients throughout an application or directly by calling them at the scheduled time (for that part we use our IVR – Interactive Voice Response  system). 
## AXLE
There is a demand for cheaper and portable methods that can be more readily deployed, such as in large lifestyle-based intervention studies, allowing cost-effective and easy assessment of parameters, such as gait, in a wide variety of environments. We are working in the validation of the AxLE device,a 3-Axis accelerometer sensor that 1) is inexpensive when compared with existing sensors (less than 20 euros); 2) is adapted to people with Parkinson's disease; 3) has 30+ days of battery duration, providing ideal conditions for free-living use; 4) supports wireless data transfer with Bluetooth Low Energy 4.0; 5) has an inconspicuous appearance looking like a regular wrist activity tracker; 6) is easy to place and it is placed in a natural position. You can see the AxLE device and the validation setup in the picture below.

<img style="width:auto; max-height: 400px; margin-left:auto; margin-right:auto;" class="img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/projects/axle.jpg" alt="Four images. The first with the AxLE device, a black wrist band. The remaining with the validation setup. From left to right: the device atached to a stick with other devices, a room where the validation was made, and the device atached to the Ax3 device for validation purposes.">


