---
title: "Tech & People Lab - Home"
layout: homelay
excerpt: "Tech & People Lab at LASIGE, FCUL"
sitemap: false
permalink: /
---
<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
We are an interdisciplinary Human-Computer Interaction research lab at <a href="http://www.lasige.di.fc.ul.pt" target="_blank">LASIGE</a>, <a href="http://ciencias.ulisboa.pt" target="_blank">Faculdade de Ciências</a> da <a href="http://www.ulisboa.pt" target="_blank">Universidade de Lisboa</a>. We design, build, and evaluate interactive technologies that address high value social issues such as accessible computing, pervasive healthcare, and usable privacy.
</p>
<p id="twitterContainer" style="display: none; margin-left: auto; margin-right: auto;">
<a class="twitter-timeline" data-tweet-limit="3" data-width="1000" data-chrome="noscrollbar nofooter noborders" href="https://twitter.com/TechPeopleLab">Tweets by Tech&People Lab @ ULisboa</a>
</p>

<h1 class='timeline-Header-title publications' style="padding-left: 10px; padding-bottom: 20px;">Recent publications  <span style="font-size: 0.5em;"><a href="{{ site.url }}{{ site.baseurl }}/publications">see all</a></span></h1>

<div class="publications">
{% assign reversed_pubs = site.publications | reverse %}
  

{% for publication in reversed_pubs limit: 3 %}
  {% include publication-home.html pub=publication %}
{% endfor %}

</div>

<h1 class='timeline-Header-title' style="padding-left: 10px; padding-bottom: 20px; padding-top: 20px;">Research highlights</h1>
<div class="filters">
<button type="button" class="btn btn-default filterBtn filter selected" id="all">All</button>
<button type="button" class="btn btn-default filterBtn filter" id="access">Accessible Computing</button>
<button type="button" class="btn btn-default filterBtn filter" id="health">Pervasive Healthcare</button>
<button type="button" class="btn btn-default filterBtn filter" id="usec">Usable Privacy</button>
<button type="button" class="btn btn-default filterBtn filter" id="inclusive_education">Inclusive Education</button>
</div>

<div class="projects">
{% for project in site.projects %}
    {% if project.link %}
        {% assign proj_url = project.link %}
    {% else %}
        {% capture proj_url %}{{ site.base }}{{ project.url }}{% endcapture %}
    {% endif %}

<div class="col-sm-4 {{ project.area }}">

{% if project.tool %}
<div id="{{ site.base }}{{ project.url }}" class="card card-project {{ project.area }}" style="	cursor: pointer; background-color: #237fc7; color: white;">
{% else %}
<div id="{{ site.base }}{{ project.url }}" class="card card-project {{ project.area }}" style=" cursor: pointer;">
{% endif %}
<a href="{{ proj_url }}">
<img id="project-image" src="{{ site.url }}{{ site.baseurl }}/images/projects/thumbnails/{{ project.image.name }}" alt="{{project.image.alt-text}}" width="100%" class="img-responsive" style="display:block; margin:auto;" /></a>
<div class="card-body {{ project.area }}">
<p class="title" style="overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;"><a href="{{ proj_url }}" style="color:inherit; text-decoration: none;">{{ project.title }}</a></p>
{% if project.tool %}
<p class="description" style="overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 6;
   -webkit-box-orient: vertical;"><a href="{{ proj_url }}" style="color:white; text-decoration: none;">{{ project.description }}</a></p>
{% else %}
<p class="description" style="overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 6;
   -webkit-box-orient: vertical;"><a href="{{ proj_url }}" style="color:inherit; text-decoration: none;">{{ project.description }}</a></p>
{% endif %}

</div>
</div>
</div>

{% endfor %}
</div>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
function twitterStuff(){
  twttr.events.bind('rendered',function(){
    resizeTwitterIframe();
  });
}
function resizeTwitterIframe(){
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const nodes = document.querySelectorAll('iframe.twitter-timeline');
  nodes.forEach(function(e,i,a){
    if(vw > 1023){
      const sectionTitle = e.contentDocument.getElementsByClassName('timeline-Header-title');
      if(sectionTitle.length){
          for (i = 0; i < sectionTitle.length; i++) {
            sectionTitle[i].style.fontWeight = "400";
            sectionTitle[i].style.color = "#333333";
          }
      }
      const lis = e.contentDocument.getElementsByClassName('timeline-TweetList-tweet');
      if(lis.length){
          for (i = 0; i < lis.length; i++) {
            lis[i].style.width = "300px";
            lis[i].style.float = "left";
            lis[i].style.marginLeft = "15px";
            lis[i].style.marginRight = "18px";
            lis[i].style.borderTop = "1px solid white";
            lis[i].style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
            lis[i].style.marginBottom = "15px";
          }
      }
      const text = e.contentDocument.getElementsByClassName('timeline-Tweet-text');
      if(text.length){
          for (i = 0; i < text.length; i++) {
            text[i].style.fontSize = "12pt";
            text[i].style.lineHeight = "18px";
            text[i].style.marginTop = "12px";
            text[i].style.marginBottom = "0px";
            text[i].style.marginLeft = "0px";
          }
      }
      const replyTag = e.contentDocument.getElementsByClassName('timeline-Tweet-inReplyTo');
      if(replyTag.length){
          for (i = 0; i < replyTag.length; i++) {
            replyTag[i].style.fontSize = "12px";
            replyTag[i].style.fontWeight = "300";
            replyTag[i].style.lineHeight = "16px";
            replyTag[i].style.marginTop = "6px";
            replyTag[i].style.marginBottom = "6px";
            replyTag[i].style.marginLeft = "0px";
            replyTag[i].style.paddingLeft = "0px";
          }
      }
      const authorName = e.contentDocument.getElementsByClassName('TweetAuthor-name');
      if(authorName.length){
          for (i = 0; i < authorName.length; i++) {
            authorName[i].style.fontSize = "12pt";
            authorName[i].style.lineHeight = "18px";
            authorName[i].style.fontWeight = "700";
            authorName[i].style.textOverflow = "ellipsis";
          }
      }
      const avatarDiv = e.contentDocument.getElementsByClassName('timeline-Tweet-author');
      if(avatarDiv.length){
          for (i = 0; i < avatarDiv.length; i++) {
            avatarDiv[i].style.paddingLeft = "45px";
          }
      }
      const avatar = e.contentDocument.getElementsByClassName('TweetAuthor-avatar');
      if(avatar.length){
          for (i = 0; i < avatar.length; i++) {
            avatar[i].style.width = "32px";
            avatar[i].style.height = "32px";
          }
      }
      const media = e.contentDocument.getElementsByClassName('timeline-Tweet-media');
      const hasMedia = media.length !== 0;
      if(media.length){
          for (i = 0; i < media.length; i++) {
            media[i].style.marginLeft = "0px";
            media[i].style.marginBottom = "0px";
          }
      }
      const actions = e.contentDocument.getElementsByClassName('timeline-Tweet-actions');
      if(actions.length){
          for (i = 0; i < actions.length; i++) {
            actions[i].style.marginLeft = "0px";
            actions[i].style.position = "absolute";
            actions[i].style.bottom = "0";
            actions[i].style.marginBottom = "24px";
          }
      }
      const metadata = e.contentDocument.getElementsByClassName('timeline-Tweet-metadata');
      if(metadata.length){
          for (i = 0; i < metadata.length; i++) {
            // metadata[i].style.position = "absolute";
            // metadata[i].style.bottom = "0";
            // metadata[i].style.direction = "rtl";
            metadata[i].style.display = 'none';
          }
      }
      document.getElementById('twitterContainer').style.display = "inline-block";
      const timelineBody = e.contentDocument.getElementsByClassName('timeline-Tweet');
      let biggerTweet = 0, parsedInt;
      let isRetweet = false;
      let isRetweetTheBigger = false;
      if(timelineBody.length){
          for (i = 0; i < timelineBody.length; i++) {
            for (var j = 0; j < timelineBody[i].childNodes.length; j++) {
                if(timelineBody[i].childNodes[j].className === 'timeline-Tweet-retweetCredit'){
                  isRetweet = true;
                  break;
                }
            }
            parsedInt = parseInt(window.getComputedStyle(timelineBody[i])["height"].replace("px",""));
            if(parsedInt > biggerTweet){
              biggerTweet = parsedInt;
              isRetweetTheBigger = isRetweet
            }
          }
          for (i = 0; i < timelineBody.length; i++) {
            if(isRetweetTheBigger)
              timelineBody[i].style.height = (46+biggerTweet)+"px";
            else
              if(!hasMedia)
                timelineBody[i].style.height = (8+biggerTweet)+"px";
              else
                timelineBody[i].style.height = (35+biggerTweet)+"px";
            timelineBody[i].style.padding = "16px";
          }
      }
    }else{
      document.getElementById('twitterContainer').style.display = "none";
    }
  });
}
document.onclick = function(e) {   //when the document body is clicked
  if (window.event) {
      e = event.srcElement;           //assign the element clicked to e (IE 6-8)
  }
  else {
      e = e.target;                   //assign the element clicked to e
  }
  if (e.className && e.className.indexOf('card') != -1) {
      //if the element has a class name, and that is 'someclass' then...
      window.open(e.id,"_self");
  }
}
var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
        if (running) { return; }
        running = true;
          requestAnimationFrame(function() {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
        });
    };
    obj.addEventListener(type, func);
};
/* init - you can init any event */
throttle("resize", "optimizedResize");
// handle event
window.addEventListener("optimizedResize", function() {
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if(vw > 1023){
    if(document.getElementById('twitterContainer').style.display === 'none'){
      document.getElementById('twitterContainer').style.display = "inline-block";
      setTimeout(resizeTwitterIframe(), 100);
    }
  }else
    document.getElementById('twitterContainer').style.display = "none";
});
window.onload = function(e){
  twitterStuff();
}

</script>
