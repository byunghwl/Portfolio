
export class WorkThumbnail{
	title:string;
	imgSrc:string;
	url:string;
}

export class Presented{
	iconUrl:string;
}

export class Awarded{
	iconUrl:string;
	linksUrl:string;
	caption:string;
}

export class FurtherLink{
	url:string;
	caption:string;
}

export class PressReleased{

}

export class AudioClouds{
	url:string;
	caption:string;
}
export class ImageGifs{
	width:number;
	height:number;
	url:string;
}

export class WorkInfomation{
	title:string;
	texts:string[];
	url:string;
	videoURL:string;
	ingredients:string[];
	imgGifs:ImageGifs[];
	audioClouds: AudioClouds[];
	futherLink:FurtherLink;
	awards:Awarded[];
	presented:Presented[];
}

export const WorkThumbList: WorkThumbnail[] = [
	  { title: 'music everywhere: AR Piano Learning experience', url: 'music-everywhere', imgSrc: "assets\\img\\me_thumb.gif" },
	  { title: 'Campfire: Responsive storytelling agent', url: 'campfire', imgSrc: "assets\\img\\alexa.png" },
	  { title: 'World Builder: VR Interaction Research', url: 'world-builder', imgSrc: "assets\\img\\autodesk.png" },
	  { title: 'vr rehearsal: Public speech practice tool', url: 'vr-rehearsal', imgSrc: "assets\\img\\vr_rehearsal1.png" },
	  //{ title: 'Gadgets: Physical prototypes Study', url: 'vr-rehearsal', imgSrc: "assets\\img\\gadget.jpg" },
	  { title: 'Buiding Virtual Worlds: Game Prototypes', url: 'bvw', imgSrc: "assets\\img\\asasdads.png" },
	  { title: 'Game Engine: Writing a Game Engine from Scratch', url: 'gameEngine', imgSrc: "assets\\img\\bear.png" },
	  { title: 'Hoorai: 3D Animation Pipeline study', url: 'hoorai', imgSrc: "assets\\img\\1123.png" },
]

export const WorlInfoOrder: string[]=[
	"music-everywhere",
	"campfire",
	"world-builder",
	"vr-rehearsal",
	"bvw",
	"gameEngine",
	"hoorai"
]

export const WorkInfoList: WorkInfomation[] = [
	  { 
	  	awards:
	  	[
	  		{
	  			iconUrl:"assets\\img\\holoContest.png", 
	  			linksUrl:"https://unity3d.com/partners/microsoft/hololens-contest",
	  			caption: "1st Grand Prize in the Microsoft Unity HoloLens developer contest 2017."
	  		}
	  	],
	  	presented:[
	  		{iconUrl:"assets\\img\\me-presented.PNG"}
	  	],
	  	title: 'music everywhere: AR Piano Learning experience', url: 'music-everywhere', 
	  	texts:[
	  		"Music Everywhere is an augmented reality piano learning system using the Microsoft Hololens.\
			It won the 2017 Microsoft Unity Hololens Contest and is currently available on the Microsoft Store.\
			This was also presented in GDC, SIGGRAPH, NIME 2017."
			,
			"The interface is overlayed directly on to the piano and this enables the user to easily follow the directions.\
			A virtual band interacts with the user by playing a jam session together or by simply explaining the music concepts in a friendly manner.\
			There are lessons provided in the software which includes interactive theory lessons, live practice sessions, and animated hand demonstrations which the user can follow to explore various genre of music."
			,
			"The application supports different sizes of keyboards ranging from 56 keys to 88 keys.\
			It communicates with the piano via MIDI-over-Bluetooth."
	  		,
	  		"This project started as an academic project in the Fall semester, 2016 in CMU and our team founded the company and commercialized the product in 2017."
	  		], 
	  	videoURL: "https://www.youtube.com/embed/QdlJMc5ek_8",
	  	imgGifs:[
	  				{width:480, height:270, url:"assets\\img\\me-3.png"},
	  				{width:480, height:270, url:"assets\\img\\me-2.png"},
	  				{width:480, height:270, url:"assets\\img\\me-1.png"}
	  			],
	  	ingredients:[
	  		"Platform - Microsoft HoloLens",
	  		"Game Engine - Unity3D with C#",
	  		"Music score importer - self written",
	  		"Piano roll interface - self written",
	  		"Bluetooth MIDI Connection - self written with Windows10 API",
	  		"HoloLens Native plug-in - self written",
	  		"Virtual Band system - self written",
	  		"GUI Lesson Builder - self written",
	  	],
	  	futherLink: 
	  		{
	  		  url:"www.music-everywhere.co", 
	  		  caption: "Go to website"
	  		},
	  	audioClouds:[]
	  },
	  { 
	  	awards:[],presented:[],
	  	title: 'Campfire: responsive storytelling agent', url: 'campfire', 
	  	texts:[
	  		'Campfire is an interactive storytelling agent which reacts to the user’s answers and questions.\
			 The motivation behind this project was to find a way to help users play with Amazon Alexa, a voice user interface (VUI) driven device.\
			 We wanted to push the boundaries of what Alexa can do to entertain people.'
			 , 
	  		"Our team built several prototypes demonstrating new interactions which the Alexa could not do at that time.(Alexa API version: v20160207)\
			For example, we implemented a syllable based voice recognition, which means that the Alexa was able to understand languages we created(e.g. Alien language).\
			Also, through using Machine Learning, we were able to create a prototype in which the Alexa was able to understand different types of answers other than a simple “Yes” or “No”."
	  		,
	  		"In order to build these kinds of new interactions, we built our own customized python based NLP framework using NLTK and Scikit-learn and connected it to our own server.\
			Also, to set up an effective content production pipeline, we built a web editor tool which let our narrative writer easily import, arrange and modify audio clips and interaction components into the experience.\
			These input were directly sent to Alexa."
			,
			"This was an academic project that was done during the semester of Spring 2017, CMU in a team of four."
	  		], 
	  	videoURL: "https://www.youtube.com/embed/qDGRh7nCgAU",
	  	imgGifs:[
	  				{width:480, height:270, url:"assets\\img\\campfire-1.gif"}, 
	  			],
	  	ingredients:[
	  		"Platform - Amazon Alexa",
	  		"Web Client - HTML5 & JQuery",
	  		"Server framework & Hosting - Node.js with pyBridge, Heroku",
	  		"NLP & Machine Learning Package - NLTK and Scikit-learn",
	  	],
	  	futherLink:null,
	  	audioClouds:[
	  			{
	  			  url:"assets\\audio\\Interactions_Navigation.mp3",
	  			  caption:"Open-ended answer"
	  			},
	  			{
	  				url:"assets\\audio\\Interactions_OpenEnded.mp3",
	  				caption:"Audio navigation"
	  			}
	  		]
	  },
	  { 
	  	awards:[],presented:[],
	  	title: 'World Builder: VR Interaction Research', url: 'world-builder', 
	  	texts:[
	  		"World builder is a capstone project I worked on during my summer internship in Autodesk.\
	  		It was about researching and building UI prototypes for 3d modeling, drawing and placing objects in the virtual reality environment.\
			I worked in a team of four (two designers, two engineers) and we performed a thorough research and ideation on how VR can useful to designers.\
			Through rapid prototyping and iteration, we were able to build several prototypes which show the optimized user interface for moving and interacting with objects in the VR space." 
	  		], 
	  	imgGifs:[
	  			{width:480, height:270, url:"assets\\img\\worldBuilder-0.gif"}, 
	  			{width:480, height:270, url:"assets\\img\\worldBuilder-2.gif"},
	  			{width:480, height:270, url:"assets\\img\\worldBuilder-3.gif"},
	  			{width:480, height:270, url:"assets\\img\\worldBuilder-4.gif"}

	  		],
	  	videoURL: "https://www.youtube.com/embed/xUZXFbeTskI",
	  	ingredients:[
	  		"Platform - HTC Vive",
	  		"3D Engine - Autodesk Stingray Engine with Lua and C++"
	  	],
	  	futherLink:null,
	  	audioClouds:[]
	  },
	  { 
	  	awards:
	  	[
	  		{
	  			iconUrl:"assets\\img\\award-icon.png", 
	  			linksUrl:"https://createpgh.org/best-of-the-creative-industries/",
	  			caption: "Top 10 Education + Gaming Projects in Pittsburgh Creative Festival 2016"
	  		}
	  	],
	  	presented:[],
	  	title: 'vr rehearsal: Public speech practice tool', url: 'vr-rehearsal', 
	  	texts:[
	  		"VR Rehearsal is a mobile VR application which was designed for people who suffers from public speech anxiety.\
			It provides a simulation of a virtual audience  which reacts to the user’s voice and gaze. \
			Users can upload their own slides on Google Drive or Dropbox.\
			By tracking your head rotation(gaze) and the sound level of your voice, the app measures your performance and provides feedback.\
			The feedback is given in two ways. During the presentation, the virtual audience reacts to your performance. \
			For example, if you are not looking at the audience, they start to look at their phone or fall asleep. \
			After the presentation, the app shows a heat map of where you were looking at and also a record file of your voice synced to each page of the slide."
	  		, 
	  		"This was an academic project that was done during the semester of Spring 2016, CMU in a team of five."
	  		], 
	  	videoURL: "https://www.youtube.com/embed/08QAXv06yYo",
	  	imgGifs:[
	  				/* {width:480, height:270, url:"assets\\img\\vrRhearsal-1.gif"}, */
	  				{width:480, height:270, url:"assets\\img\\vrRhearsal-2.gif"},
	  				{width:480, height:270, url:"assets\\img\\vrRhearsal-3.gif"}
	  			],
	  	ingredients:[
	  		"Platform - Android phone with Google Cardboard",
	  		"Game Engine - Unity3D with C#",
	  		"Cloud Storage - GoogleDrive API & Dropbox API",
	  		"Android native plugin - self written"
	  	],
	  	futherLink:{
	  		  url:"https://www.etc.cmu.edu/projects/vr-rehearsal/", 
	  		  caption: "Go to website"
	  		},
	  	audioClouds:[]
	  },
	  { 
	  	awards:[],presented:[],
	  	title: 'Buiding Virtual Worlds: Game Prototypes', url: 'bvw', 
	  	texts:[
	  		"BVW is a course in which the students have to create five games within a semester.\
	  		 I worked in different teams creating a game every two weeks.\
			 Through this course, I learned how to communicate with people with different background and was able to practice rapid prototyping and user playtesting."
	  		], 
	  	videoURL: "https://www.youtube.com/embed/CxOcDayI88Y",
	  	imgGifs:[
	  				{width:480, height:270, url:"assets\\img\\bvw-r-0.gif"},
	  				{width:480, height:270, url:"assets\\img\\bvw-r-1.gif"},
	  				{width:480, height:270, url:"assets\\img\\bvw-r-2.gif"},
	  				{width:480, height:270, url:"assets\\img\\bvw-r-4.gif"},
	  				{width:480, height:270, url:"assets\\img\\bvw-r-5.gif"}
	  			],
	  	ingredients:[
	  		"Platforms - Oculus Lift, Kinect, LeapMotion, Makey-Makey",
	  		"Game Engine - Unity3D with C#"
	  	],
	  	futherLink:null,
	  	audioClouds:[]
	  },
	  { 
	  	awards:[],presented:[],
	  	title: 'Game Engine: Writing a Game Engine from Scratch', url: 'gameEngine', 
	  	texts:[
	  		"B3D was a project in which I built a 3D game engine from scratch.\
			It includes a programmable shader pipeline (HLSL), forward-kinematics animation system, a simple collision detection(AABB) algorithm and uses Lua library to support simple logic scripting functionality.\
			The project is built using C++ and DirectX 9.\
			In order to build a game engine with better performance, I studied various topics such as data-oriented design and A* pathfinder algorithm.\
			This project was a capstone project for the KOCCA Academy.\
			The engine developed in a team of two and we created a game using this game engine as a demo by collaboration with two 3D artists."
	  		], 
	  	videoURL: "https://www.youtube.com/embed/F4OaWtVeZH4",
	  	imgGifs:[
	  				{width:480, height:270, url:"assets\\img\\b3d-game_hit.gif"},
	  				{width:480, height:270, url:"assets\\img\\b3d-test.gif"}	
	  			],
	  	ingredients:[
	  		"Platform - Windows 7",
	  		"Library - DirectX9 & Windows API",
	  		"Model importer - self written",
			"Animation System(FK only) - self written",
	  		"Lua Script Binding for basic game data - LuaBridge",
	  		"Demo Game Play - self written",
	  		"Programmed by C++ and Lua"
	  	],
	  	futherLink: 
	  		{
	  		  url:"https://github.com/byunghwl/GameEngineDemo", 
	  		  caption: "Go to git repo"
	  		},
	  	audioClouds:[]
	  },
	  { 
	  	awards:[],presented:[],
	  	title: 'Hoorai: 3D Animation Pipeline study', url: 'hoorai', 
	  	texts:[
	  		"Hoorai is a personal animation project I worked on to have a better understanding of 3D animation production.\
			 I created a 5-minute 3d animation in which I did all the 3D modeling, rigging, lighting and rendering.\
			 Through this study, I learned the basics of 3d art and a deep understanding of the art pipeline which was helpful when working with artists and designers.\
			 I worked on this project for 4 weeks." 
	  		], 
	  	videoURL: "https://www.youtube.com/embed/mBQj0xAq6a0",
	  	imgGifs:[
	  				{width:480, height:270, url:"assets\\img\\hoorai-2.png"},
	  				{width:480, height:270, url:"assets\\img\\hoorai-3.png"},
	  				{width:480, height:270, url:"assets\\img\\hoorai-1.png"},
	  				
	  			],
	  	ingredients:[
	  		"3D Edit Tool - Blender and ZBrush",
	  		"2D Texture - Photoshop",
	  		"Video Edit Tool - Premiere"
	  	],
	  	futherLink:null,
	  	audioClouds:[]
	  }
]
