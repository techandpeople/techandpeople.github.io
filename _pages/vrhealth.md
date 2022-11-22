---
title: "Workshop on Virtual Reality for Health and Wellbeing at MUM 2022 (Lisbon, Portugal)"
layout: vr
excerpt: "Workshop on Virtual Reality for Health and Wellbeing"
sitemap: false
permalink: /vrhealth/
---

<h1>Workshop on Virtual Reality for Health and Wellbeing</h1>

<h3>At <a href="https://www.mum-conf.org/2022/">Mobile and Ubiquitous Multimedia</a>, November 27th, Lisbon, Portugal</h3>


<div id="myCarousel" class="carousel slide" data-ride="carousel" data-pause="hover" data-interval="false">
  <!-- Indicators -->
  <ol class="carousel-indicators">
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" role="button" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous slide</span>
  </a>
  <a class="right carousel-control" role="button" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next slide</span>
  </a>
</div>

<script>
let count = 0;
</script>
{% for img in site.data.vr.highlights %}
{% assign highlight = site.data.vr[img] %}
<script>
$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+ (count++) +'"></li>');
$(".carousel-inner").append('<div class="item"><img style="width:auto; max-height: 400px; margin-left:auto; margin-right:auto;" class="img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/vr/{{highlight.photo}}" alt="{{highlight.alt}}"></div>')
$(".carousel-indicators > li:first").addClass("active");
$(".carousel-inner > div:first").addClass("active");
</script>
{% endfor %}


<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
Virtual Reality has become a mainstream opportunity to develop immersive environments where people are exposed to relevant stimuli in a systematic but safe way. Besides the controlled exposure to stimuli, VR systems enable a more efficient and unbiased gathering of information with practical applications in diagnosis, intervention, and health monitoring processes. Nonetheless, scientific literature has demonstrated that interacting with VR technology and its peripherals can be challenging, especially in populations less familiar with technology (e.g., older adults) or with clinical conditions that are not adequately accommodated by the technology, such as cognitive (e.g., dementia) or physical impairments (e.g., blindness). This workshop will focus on systems, technological approaches, and theoretical frameworks to develop user/patient-centred VR tools for diagnosis, intervention, and monitoring of health and wellbeing outcomes. Moreover, we welcome work focused on accessibility issues, aiming to promote equal access and opportunity to use VR tools by people with diverse abilities. 
</p>

<h1 id="keynote">Keynote Speakers</h1>

<div class="col-md-4">
<div class="row">
<img id="bio-photo" alt="Profile photo of Micaela Fonseca" src="/images/people/micaela_fonseca.jpg" class="img-responsive imgteam" />
</div>
<div class="row" style="overflow: hidden;">


</div>
</div>
<div class="col-md-8">
<h1>Micaela Fonseca</h1>
<h3>Designing for Maximized Entertainment. How to contribute to greater ubiquity of immersive digital environments for therapy?</h3>
<p>Micaela Fonseca holds a PhD in Physics (Universidade Nova de Lisboa [PT], 2011). Micaela is Principal Researcher at HEI-Lab (Digital Human-Environment Interaction Lab) and assistant Professor at the School of Communication, Architecture, Arts and Information Technologies, Lusófona University. Since 2012, she has been an invited Assistant Professor at NOVA FCT for Biomedical Engineering, Physics Engineering and researcher at LIBPhys-UNL
Micaela has been engaged in several VR-based simulation projects, she is co-founder of VR4NeuroPain and Games for Good. She has published several scientific papers in ehealth and serious games. Micaela also studied Directing Fiction and Ceramics (her works have been exhibited in contemporary galleries).</p>


<div class="row">
<img id="bio-photo" alt="Profile photo of Jun Nishida" src="/images/people/jun_nishida.jpeg" class="img-responsive imgteam" />
</div>
<div class="row" style="overflow: hidden;">


</div>
</div>
<div class="col-md-8">
<h1>Jun Nishida</h1>
<h3>Enabling the Communication of Physical Experiences</h3>
<p><a href="https://junis.sakura.ne.jp/wp/">Jun Nishida</a> is an incoming Assistant Professor at the University of Maryland, College Park at the Department of Computer Science. Previously he was a postdoctoral fellow at the University of Chicago, advised by Prof. Pedro Lopes and has received a Ph.D. in Human Informatics at the University of Tsukuba, Japan in 2019. He is interested in exploring interaction techniques and wearable interfaces where people can communicate their embodied experiences to support each other, with applications in the fields of rehabilitation, education, and design. He has received ACM UIST Best Paper Award, ACM CHI Best Paper Honorable Mention Award, Microsoft Research Asia Fellowship Award, and Forbes 30 Under 30 Award among others.</p>
</div>

<h1 id="accepted">Accepted Papers</h1>


<div class="publications">

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="" target="_blank">Using VR and Sensors for Anxiety with Children and Adolescents</a></p>
<p class="detail">João Ferreira, Filipa Ferreira-Brito, João Guerreiro and Tiago Guerreiro</p>
<p class="detail pub-links">
<!--[<a href="/downloads/cholakoska.pdf" target="_blank">PDF</a>]-->
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="" target="_blank">Using Virtual Reality to elicit Empathy: a narrative review</a></p>
<p class="detail">Emilija Kizhevska, Filipa Ferreira-Brito, Tiago Guerreiro and Mitja Lustrek</p>
<p class="detail pub-links">
<!--[<a href="/downloads/rodrigues.pdf" target="_blank">PDF</a>]-->
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="" target="_blank">Toward scalable VR therapy solutions for individuals with Autism Spectrum Conditions: Challenges and Opportunities</a></p>
<p class="detail">Elio Salvadori, Giulia Mezzanotte, Silvia Gabrielli, Marco Dianti and Oscar Mayora-Ibarra</p>
<p class="detail pub-links">
<!--[<a href="/downloads/lukan.pdf" target="_blank">PDF</a>]-->
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="" target="_blank">Facial Expression Recognition using Facial Mask with EMG Sensors</a></p>
<p class="detail">Ivana Kiprijanovska, Borjan Sazdov, Martin Majstoroski, Simon Stankoski, Martin Gjoreski, Charles Nduka and Hristijan Gjoreski</p>
<p class="detail pub-links">
<!--[<a href="/downloads/peltonen.pdf" target="_blank">PDF</a>]-->
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="" target="_blank">Age-related performance decline detected by a virtual reality multidomain cognitive training solution (Enhance VR)</a></p>
<p class="detail">Victoria Brugada-Ramentol, Maiya Morgan, Hossein Jalali and Amir Bozorgzadeh</p>
<p class="detail pub-links">
<!--[<a href="/downloads/carvalho.pdf" target="_blank">PDF</a>]-->
</p>
</div>
</div>
</div>


</div>

<h1 id="schedule">Schedule</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
The workshop will run on room 6.3.27, C6 bulding of Faculdade de Ciências da Universidade de Lisboa (FCUL, Campo Grande, Lisboa). We intend to have a discussion-oriented workshop and plan to achieve that with a stimulating keynote speeches, a set of sessios organized around topics, and social acitivities for networking. Roughly, the schedule will be as follows (time in GMT):</p>

* 9:00 - 9:15: Welcoming 
* 9:15 - 10:15: **Keynote speaker I - Micaela Fonseca**
* 10:15 - 10:45: Coffee Break 
* 10:45 - 11:15: Speed Dating 
* 11:15 - 12:30: **Session I**
    * 11:15 - 11:30: Oral presentation 1 - Using VR and Sensors for Anxiety with Children and Adolescents
    * 11:30 - 11:45: Oral presentation 2 - Using Virtual Reality to elicit Empathy: a narrative review
* 11:45 - 12:30: Roundtable discussion
* 12:30 - 14:00: Lunch 
* 14:00 - 15:30: **Session II** 
    * 14:00 - 14:15: Oral presentation 3 - Facial Expression Recognition using Facial Mask with EMG Sensors
    * 14:15 - 14:30: Oral presentation 4 - Toward scalable VR therapy solutions for individuals with Autism Spectrum Conditions: Challenges and Opportunities
    * 14:30 - 14:45: Oral presentation 5 - Age-related performance decline detected by a virtual reality multidomain cognitive training solution (Enhance VR) 
* 14:45 - 15:30: Roundtable discussion
* 15:30 - 16:00: Coffee Break 
* 16:00 - 17h00: **Keynote speaker II - Jun Nishida**
* 17:00 - 17:30: Town Hall Discussion
* 17:30 - 17:45: Closing
* 19:30 - Dinner 

<h1 id="cfp">Call For Papers</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
This workshop aims to promote the exchange of experiences, knowledge, and know-how on strategies to develop effective and accessible VR tools for diagnosis, intervention, rehabilitation, and monitoring of health and wellbeing. Its main goals are:
</p>

<ul>
    <li>Provide practical guidance for developing effective, usable, and accessible VR tools</li>
    <li>Understand the strengths and limitations of VR technology in healthcare</li>
    <li>Raise awareness and provide guidance to the design of technology that effectively takes into account patient needs, aligns with their values, and offers them benefits over more traditional approaches</li>
    <li>Understand the ethical, privacy, and access implications of VR technology in clinical populations</li>
    <li>Future scenarios and opportunities for the use of VR technology</li>

</ul>

<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
To achieve these goals and others, we hope to bring together the virtual reality, digital health, ubiquitous computing, sensor development, machine learning, digital health, clinical, HCI and accessibility communities. Through this workshop, participants will be able to share real-life deployment experiences, tools, challenges, and discuss designs and technology goals for future research.
</p>

<h2>Topics</h2>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Topics for the workshop include:</p>

<ul>
    <li>VR applications and tools</li>
    <li>Case studies of VR in healthcare </li>
    <li>Challenges and opportunities of VR in healthcare</li>
    <li>Longitudinal deployments and user studies in VR</li>
    <li>Interaction and sensing in healthcare</li>
    <li>Diagnosis and monitoring in VR</li>
    <li>Medical care and interventions in VR</li>
    <li>Cognitive and/or motor training and rehabilitation </li>
    <li>Contextual challenges of VR systems</li>
    <li>Human factors in VR</li>
    <li>Subjective presence/embodiment in VR</li>
    <li>Accessibility in VR</li>
    <li>Ethical implications in clinical research with VR</li>
    <li>Participatory design approaches to VR</li>
    <li>Position papers on the future of VR in healthcare</li>
</ul>

<h2>Important Dates</h2>

<ul>
    <li>Submission deadline: October 23rd, 2022 (extended)</li>
    <li>Notification: October 27th, 2022</li>
    <li>Workshop: November 27th, 2022</li>
</ul>


<h1 id="submission">Submissions</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
Submissions should use the <a href="https://www.acm.org/publications/proceedings-template">ACM sigconf template</a> and have a maximum of 4 pages, excluding references, and should be submitted via <a href="https://easychair.org/conferences/?conf=vrforhealthwellbeing0">EasyChair</a>. The deadline for paper submission is October 23rd, 2022. Authors of accepted papers will be notified on October 27th, 2022.
</p>

<!-- <p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Submit your paper at <a href="https://new.precisionconference.com/~sigchi/">Precision Conference</a>. Make a new submission in the SIGCHI, Ubicomp/ISWC 2021, Workshop: Designing Ubi Health Monitoring Tech Track.</p> -->


<h1 id="organizers">Organizers</h1>

<div class="row people-row">
{% for member in site.data.team_members.vrhealth %}
{% assign person = site.data.team_members[member] %}
<div class="col-sm-3">
<div id="{{member}}" class="card card-team-member">
<a href="{{ person.url }}">
<img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ person.photo }}" width="100%" class="img-responsive imgteam" style="margin-top: 0; float: left" /></a>
<div class="card-body">
<p class="title">{{ person.name }}</p>
<p class="detail">{{ person.institution }}</p>
</div>
</div>
</div>
{% endfor %}
</div>


<h1 id="support">Support</h1>
<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
This workshop was partially supported by the EU H2020 <a href="https://widehealth.eu/">WideHealth</a> project (grant agreement No 952279) and FCT through LASIGE funding (ref. UIDB/00408/2020 and ref. UIDP/00408/2020).
</p>


<script src="{{ "/js/bootstrap.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="{{ "/js/bootstrap-accessibility.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/functions.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/anchor_offset.js"></script>
