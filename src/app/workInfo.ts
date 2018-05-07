
export class WorkThumbnail{
	title:string;
	imgSrc:string;
	url:string;
}

export class Presented{

}

export class Awarded{
	
}

export class PressReleased{

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
}

export const WorkThumbList: WorkThumbnail[] = [
	  { title: 'music everywhere: AR Piano Learning experience', url: 'music-everywhere', imgSrc: "assets\\img\\me_thumb.gif" },
	  { title: 'Campfire: Responsive storytelling agent', url: 'vr-rehearsal', imgSrc: "assets\\img\\alexa.png" },
	  { title: 'World Builder: VR Interaction Research', url: 'world-builder', imgSrc: "assets\\img\\autodesk.png" },
	  { title: 'vr rehearsal: Public speech practice tool', url: 'vr-rehearsal', imgSrc: "assets\\img\\vr_rehearsal1.png" },
	  //{ title: 'Gadgets: Physical prototypes Study', url: 'vr-rehearsal', imgSrc: "assets\\img\\gadget.jpg" },
	  { title: 'Buiding Virtual Worlds: Game Prototypes', url: 'bvw', imgSrc: "assets\\img\\asasdads.png" },
	  { title: 'B3D Engine: Writing a Game Engine from Scratch', url: 'b3d', imgSrc: "assets\\img\\bear.png" },
	  { title: 'Hoorai: 3D Animation Pipeline study', url: 'hoorai', imgSrc: "assets\\img\\1123.png" },
]

export const WorkInfoList: WorkInfomation[] = [
	  { 
	  	title: 'music everywhere: AR Piano Learning experience', url: 'music-everywhere', 
	  	texts:[
	  		"my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk", 
	  		"Yoyo ladkfo"
	  		], 
	  	videoURL: "https://www.youtube.com/embed/QdlJMc5ek_8",
	  	imgGifs:[
	  				{width:480, height:270, url:"https://giphy.com/embed/OqFJJXyIuSorQ4KP9W"},
	  				{width:480, height:270, url:"https://giphy.com/embed/OqFJJXyIuSorQ4KP9W"},
	  				{width:480, height:270, url:"https://giphy.com/embed/OqFJJXyIuSorQ4KP9W"}
	  			],
	  	ingredients:[
	  		"Recurrent Neural Network (RNN) model - Madmom",
	  		"Recurrent Neural Network (RNN) model - Madmom",
	  		"Database - PostgreSQL"
	  	]
	  },
	  { 
	  	title: 'World Builder: VR Interaction Research', url: 'world-builder', 
	  	texts:[
	  		"Autodesk interaction research program", 
	  		], 
	  	imgGifs:[
	  			{width:480, height:270, url:"assets\\img\\worldBuilder-0.gif"}, 
	  			{width:480, height:270, url:"assets\\img\\worldBuilder-2.gif"},
	  			{width:480, height:270, url:"assets\\img\\worldBuilder-3.gif"},
	  			{width:480, height:270, url:"assets\\img\\worldBuilder-4.gif"}

	  		],
	  	videoURL: "https://www.youtube.com/embed/xUZXFbeTskI",
	  	ingredients:[
	  		"Platform - HTC Vive & Autodesk Stingray Engine",
	  		"Programed by Lua and C++"
	  	]
	  },
	  { 
	  	title: 'vr rehearsal: Public speech practice tool', url: 'vr-rehearsal', 
	  	texts:[
	  		"my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk", 
	  		"Yoyo ladkfo"
	  		], 
	  	videoURL: "https://www.youtube.com/embed/08QAXv06yYo",
	  	imgGifs:[
	  				/* {width:480, height:270, url:"assets\\img\\vrRhearsal-1.gif"}, */
	  				{width:480, height:270, url:"assets\\img\\vrRhearsal-2.gif"},
	  				{width:480, height:270, url:"assets\\img\\vrRhearsal-3.gif"}
	  			],
	  	ingredients:[
	  		"Recurrent Neural Network (RNN) model - Madmom",
	  		"Recurrent Neural Network (RNN) model - Madmom",
	  		"Database - PostgreSQL"
	  	]
	  },

	  { 
	  	title: 'Buiding Virtual Worlds: Game Prototypes', url: 'bvw', 
	  	texts:[
	  		"my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk", 
	  		"Yoyo ladkfo"
	  		], 
	  	videoURL: "https://www.youtube.com/embed/qDGRh7nCgAU",
	  	imgGifs:[
	  				{width:480, height:270, url:"assets\\img\\bvw-r-0.gif"},
	  				{width:480, height:270, url:"assets\\img\\bvw-r-1.gif"},
	  				{width:480, height:270, url:"assets\\img\\bvw-r-2.gif"},
	  				{width:480, height:270, url:"assets\\img\\bvw-r-4.gif"},
	  				{width:480, height:270, url:"assets\\img\\bvw-r-5.gif"}
	  			],
	  	ingredients:[
	  		"Hardwares - Oculus Lift, Kinect, LeapMotion, Makey-Makey",
	  		"Platform - Unity3D with C#"
	  	]
	  },
	  { 
	  	title: 'B3D Engine: Writing a Game Engine from Scratch', url: 'b3d', 
	  	texts:[
	  		"my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk", 
	  		"Yoyo ladkfo"
	  		], 
	  	videoURL: "https://www.youtube.com/embed/F4OaWtVeZH4",
	  	imgGifs:[
	  				{width:480, height:270, url:"assets\\img\\b3d-test.gif"},
	  				{width:480, height:270, url:"assets\\img\\b3d-game_hit.gif"},
	  				
	  			],
	  	ingredients:[
	  		"Platform - Windows 7",
	  		"Library - DirectX9 & Windows API",
	  		"Model importer - .ASE data format parser (self-built)",
			"Shader Render Pipeline - Self written",
			"Animation System (Forward Kinematics only) - Self written",
	  		"Collision Algorithm(AABB, OBB, Sphere) - Self written",
	  		"Lua Script Binding for Game Logic - LuaBridge",
	  		"Programmed by C++ and Lua"
	  	]
	  },
	  { 
	  	title: 'Hoorai: 3D Animation Pipeline study', url: 'hoorai', 
	  	texts:[
	  		"my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk", 
	  		"Yoyo ladkfo"
	  		], 
	  	videoURL: "https://www.youtube.com/embed/mBQj0xAq6a0",
	  	imgGifs:[
	  				{width:480, height:270, url:"assets\\img\\b3d-test.gif"},
	  				{width:480, height:270, url:"assets\\img\\b3d-game_hit.gif"},
	  				
	  			],
	  	ingredients:[
	  		"3D Edit Tool - Blender and ZBrush",
	  		"2D Texture - Photoshop",
	  		"Video Edit Tool - Premiere"
	  	]
	  }
]
