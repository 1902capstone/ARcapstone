'use strict';

import React, { Component } from 'react';

import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroARImageMarker,
  Viro3DObject,
  ViroAmbientLight,
  ViroFlexView,
  ViroSpotLight,
  ViroImage,
  ViroQuad,
  ViroButton,
  ViroARPlane,
  ViroARCamera,
  ViroSphere,
  ViroARPlaneSelector,
  ViroAnimations,
  ViroARTrackingTargets,
  ViroNode,
} from 'react-viro';


let spheres = [];
let timerStarted = false;
let timerIntervalId;
let ballSpawnIntervalId;
let gameStarted = false;
let sphereCount = 0;


export default class JoshScene extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
      spheres: 0,
      startTime: 0,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this.createSpheres = this.createSpheres.bind(this);
    this.renderSpheres = this.renderSpheres.bind(this);
    // this.handleTime = this.handleTime.bind(this);
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleScore = this.handleScore.bind(this);
  }


  componentDidMount() {
    gamestarted = false;
    spheres = [];
  }

  
  componentWillUnmount() {
    clearInterval(ballSpawnIntervalId)
    ballSpawnIntervalId = 0;
    spheres = [];
  }
  
  render() {
    //const timer = this.props.arSceneNavigator.viroAppProps.timer

    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        physicsWorld={{ gravity: [0, -1.8, 0] }}
      >
<<<<<<< HEAD
        <ViroARPlaneSelector
          minHeight={0.01}
          minWidth={0.01}
          onPlaneSelected={() => {
            this.setState({ pauseUpdates: true });
          }}
          pauseUpdates={this.state.pauseUpdates}
        >
          <ViroSphere
            // viroTag="BallTag"
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.5}
            position={[0, 1.5, -4]}
            height={1}
            materials={['blue']}
            physicsBody={{
              type: 'Dynamic',
              mass: 8,
              restitution: 1,
            }}
          />
          <ViroSphere
            // viroTag="BallTag"
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.5}
            position={[0.5, 1, -4]}
            height={1}
            materials={['purple']}
            physicsBody={{
              type: 'Dynamic',
              mass: 8,
              restitution: 0.999,
            }}
          />
          <ViroSphere
            // viroTag="BallTag"
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.5}
            position={[0.5, 2, -2]}
            height={1}
            materials={['purple']}
            physicsBody={{
              type: 'Dynamic',
              mass: 8,
              restitution: 0.999,
            }}
          />
          <ViroSphere
            // viroTag="BallTag"
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.5}
            position={[0.5, 2, -3]}
            height={1}
            materials={['purple']}
            physicsBody={{
              type: 'Dynamic',
              mass: 8,
              restitution: 0.999,
            }}
          />
          <ViroSphere
            // viroTag="BallTag"
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.5}
            position={[0.5, 2, -1]}
            height={1}
            materials={['purple']}
            physicsBody={{
              type: 'Dynamic',
              mass: 8,
              restitution: 0.999,
            }}
          />
          <ViroSphere
            // viroTag="BallTag"
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.5}
            position={[0.5, 2, -1]}
            height={1}
            materials={['purple']}
            physicsBody={{
              type: 'Dynamic',
              mass: 8,
              restitution: 0.999,
            }}
          />
            <ViroSphere
            // viroTag="BallTag"
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.5}
            position={[0, -1, -1]}
            height={1}
            materials={['purple']}
            physicsBody={{
              type: 'Dynamic',
              mass: 8,
              restitution: 0.999,
            }}
          />
          <ViroQuad
            position={[0, -2, -4]}
            height={7}
            width={4}
            rotation={[-87, 0, 0]}
            opacity={0.8}
            physicsBody={{ type: 'Static', restitution: 1 }}
            materials={['red']}
          />

          {/* <ViroText 
            text={this.props.arSceneNavigator.viroAppProps.score}
            width={2}
            height={2}
            position={[0,0,-5]}
            extrusionDepth={1}
          /> */}

          <ViroText
            text={currentScore.toString()}
            scale={[.5, .5, .5]}
            position={[0, 0, -1]}
            style={localStyles.helloWorldTextStyle} />

          <ViroARCamera>
            <Viro3DObject
              animation={{ name: 'rotate', run: true, loop: true }}
              source={require('../assets/3DModels/skull/Skull.obj')}
              opacity={0.2}
              // resources={[
              //   require('./res/emoji_smile/emoji_smile_diffuse.png'),
              //   require('./res/emoji_smile/emoji_smile_normal.png'),
              //   require('./res/emoji_smile/emoji_smile_specular.png'),
              // ]}
              position={[0, -.5, -1]}
              scale={[0.0008, 0.0008, 0.0008]}
              type="OBJ"
              physicsBody={{type: 'Static'}}
              onCollision={this.props.arSceneNavigator.viroAppProps.incrementScore}
            />
          </ViroARCamera>
        </ViroARPlaneSelector>
=======
        {this.renderARScene()}
>>>>>>> 97a5d0a8bbd98f42935ec33aadf2e346390bab3e
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {


    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Welcome to the arcade!',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }





  createSpheres() {
    const spheresToLoad = [];
    const numOfSpheres = Math.floor(Math.random() * 2) + 3

    for (let i = 0; i < numOfSpheres; i++) {
      const sphereTag = `sphere-${sphereCount + 1}`
      sphereCount++;
      

      const randomYPos = (Math.random() * 2) + 0.5
      // between 0.5 and 2.5
      const randomZPos = ((Math.random() * 3) + 1.5) * -1
      // between -1.5 and -4.5
      const randomXPos = ((Math.random() * 3)  - 1.5)
      // between -1.5 and 1.5
      const randomMass = Math.floor(Math.random() * 11) + 1
      // between 1 and 12
      const randomRad = Math.floor(Math.random() * 0.3) + 0.2
      // between 0.2 and 0.5
      
      
      const x = <ViroSphere
        key={sphereTag}
        viroTag={sphereTag}
        heightSegmentCount={20}
        widthSegmentCount={20}
        radius={randomRad}
        position={[randomXPos, randomYPos, -3]}
        height={1}
        materials={['purple']}
        physicsBody={{
          type: 'Dynamic',
          mass: randomMass,
          restitution: 0.999,
        }}

      />
      const SphereObj = {
        show: false,
        model: x,
        num: spheres.length + 1,
        time: 0,
      }
      spheres.push(SphereObj);

    }

    // const sphereTag = `sphere-${sphereCount+1}`
    // sphereCount++;
    // const x = <ViroSphere
    //   key = {sphereTag}
    //   viroTag = {sphereTag}
    //   heightSegmentCount={20}
    //   widthSegmentCount={20}
    //   radius={0.7}
    //   position={[0.5, 1, -4]}
    //   height={1}
    //   materials={['purple']}
    //   physicsBody={{
    //     type: 'Dynamic',
    //     mass: 8,
    //     restitution: 0.999,
    //   }}

    // />
    //   const SphereObj = {
    //     show: false,
    //     model: x,
    //     num: spheres.length+1,
    //     time: 0,
    //   }
    //   spheres.push(SphereObj);

    this.setState({
      spheres: this.state.spheres + spheresToLoad.length
    })

  }


  renderSpheres() {
    let sphereList = spheres.map((item) => {
      return item.model;
    })
    return sphereList;
  }

  // handleTime() {
  //   if (!timerStarted) {
  //     console.log(this.props.arSceneNavigator.viroAppProps)
  //     const setTimer = this.props.arSceneNavigator.viroAppProps.setTimer
  //     const myStartTime = this.state.startTime
  //     this.setState({
  //       startTime: Date.now()
  //     })
  //     const findNewTime = function(setTimerFunc, myStartTimeVar) {
  //       const currentTime = Date.now();
  //       let timeElapsed = currentTime - myStartTimeVar;
  //       setTimerFunc(timeElapsed);
  //     }

  //     timerIntervalId = setInterval(findNewTime(setTimer, myStartTime), 1000);
  //     timerStarted = true;
  //   }
  // }

  handleGameStart() {
    if (!ballSpawnIntervalId && this.state.startTime) {
      this.props.arSceneNavigator.viroAppProps.beginTimer()
      ballSpawnIntervalId = setInterval(this.createSpheres, 1800)
    }
  }

  handleScore(colliderTag) {


    let indexOfSphere = spheres.findIndex((elt) => {
      return (elt.model.props.viroTag === colliderTag)
    })
    spheres.splice(indexOfSphere, 1);

    this.setState({
      spheres: this.state.spheres - 1
    })
    this.props.arSceneNavigator.viroAppProps.incrementScore()
  }

  renderARScene() {

    const currentScore = this.props.arSceneNavigator.viroAppProps.score
    const timer = this.props.arSceneNavigator.viroAppProps.timer

    return (

      <ViroARPlaneSelector
        minHeight={0.01}
        minWidth={0.01}
        onPlaneSelected={() => {
          this.handleGameStart()
          this.setState({ pauseUpdates: true, startTime: Date.now() });
        }}
        pauseUpdates={this.state.pauseUpdates}
      >



        {/* {this.handleTime()} */}
        {this.handleGameStart()}
        {this.renderSpheres()}


        <ViroQuad
          position={[0, -2, -4]}
          height={7}
          width={4}
          rotation={[-87, 0, 0]}
          opacity={0.8}
          physicsBody={{ type: 'Static', restitution: 1 }}
          materials={['red']}
        />

        <ViroText
          text={currentScore.toString()}
          scale={[.5, .5, .5]}
          position={[0, 0, -1]}
          style={localStyles.helloWorldTextStyle} />


        <ViroARCamera>
          <Viro3DObject
            animation={{ name: 'rotate', run: true, loop: true }}
            source={require('./res/Skull.obj')}
            opacity={0.2}
            // resources={[
            //   require('./res/emoji_smile/emoji_smile_diffuse.png'),
            //   require('./res/emoji_smile/emoji_smile_normal.png'),
            //   require('./res/emoji_smile/emoji_smile_specular.png'),
            // ]}
            position={[0, -.5, -1]}
            scale={[0.0008, 0.0008, 0.0008]}
            type="OBJ"
            physicsBody={{ type: 'Static' }}
            // onCollision={this.props.arSceneNavigator.viroAppProps.incrementScore}
            onCollision={this.handleScore}
            onClick={this.createSpheres}
          />
        </ViroARCamera>
      </ViroARPlaneSelector>


    )

  }



}

var localStyles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('../assets/Images/grid_bg.jpg'),
  },
  red: {
    diffuseColor: 'red',
  },
  blue: {
    diffuseColor: 'lightblue',
  },
  purple: {
    diffuseColor: 'lavender',
  },
  helloWorldTextStyle: {

  },
});

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../assets/Images/targetOne.png'),
    orientation: 'Up',
    physicalWidth: 0.1, // real world width in meters
    type: 'Image',
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=30',
    },
    duration: 25000, //.25 seconds
  },
});

module.exports = JoshScene;
