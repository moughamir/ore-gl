/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/gl/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/gl13/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three-effectcomposer-es6/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/three-effectcomposer-es6/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ClearMaskPass = exports.MaskPass = exports.ShaderPass = exports.RenderPass = exports.CopyShader = undefined;\n\nvar _copyshader = __webpack_require__(/*! ./lib/copyshader */ \"./node_modules/three-effectcomposer-es6/dist/lib/copyshader.js\");\n\nObject.defineProperty(exports, 'CopyShader', {\n  enumerable: true,\n  get: function get() {\n    return _copyshader.CopyShader;\n  }\n});\n\nvar _renderpass = __webpack_require__(/*! ./lib/renderpass */ \"./node_modules/three-effectcomposer-es6/dist/lib/renderpass.js\");\n\nObject.defineProperty(exports, 'RenderPass', {\n  enumerable: true,\n  get: function get() {\n    return _renderpass.RenderPass;\n  }\n});\n\nvar _shaderpass = __webpack_require__(/*! ./lib/shaderpass */ \"./node_modules/three-effectcomposer-es6/dist/lib/shaderpass.js\");\n\nObject.defineProperty(exports, 'ShaderPass', {\n  enumerable: true,\n  get: function get() {\n    return _shaderpass.ShaderPass;\n  }\n});\n\nvar _maskpass = __webpack_require__(/*! ./lib/maskpass */ \"./node_modules/three-effectcomposer-es6/dist/lib/maskpass.js\");\n\nObject.defineProperty(exports, 'MaskPass', {\n  enumerable: true,\n  get: function get() {\n    return _maskpass.MaskPass;\n  }\n});\n\nvar _clearmaskpass = __webpack_require__(/*! ./lib/clearmaskpass */ \"./node_modules/three-effectcomposer-es6/dist/lib/clearmaskpass.js\");\n\nObject.defineProperty(exports, 'ClearMaskPass', {\n  enumerable: true,\n  get: function get() {\n    return _clearmaskpass.ClearMaskPass;\n  }\n});\n\nvar _three = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction EffectComposer(renderer, renderTarget) {\n  this.renderer = renderer;\n\n  if (renderTarget === undefined) {\n    var width = window.innerWidth || 1;\n    var height = window.innerHeight || 1;\n    var parameters = { minFilter: _three.LinearFilter, magFilter: _three.LinearFilter, format: _three.RGBFormat, stencilBuffer: false };\n\n    renderTarget = new _three.WebGLRenderTarget(width, height, parameters);\n  }\n\n  this.renderTarget1 = renderTarget;\n  this.renderTarget2 = renderTarget.clone();\n\n  this.writeBuffer = this.renderTarget1;\n  this.readBuffer = this.renderTarget2;\n\n  this.passes = [];\n\n  this.copyPass = new _shaderpass.ShaderPass(_copyshader.CopyShader);\n}\n\nEffectComposer.prototype.swapBuffers = function () {\n  var tmp = this.readBuffer;\n  this.readBuffer = this.writeBuffer;\n  this.writeBuffer = tmp;\n};\n\nEffectComposer.prototype.addPass = function (pass) {\n  this.passes.push(pass);\n};\n\nEffectComposer.prototype.insertPass = function (pass, index) {\n  this.passes.splice(index, 0, pass);\n};\n\nEffectComposer.prototype.render = function (delta) {\n  this.writeBuffer = this.renderTarget1;\n  this.readBuffer = this.renderTarget2;\n\n  var maskActive = false;\n\n  for (var i = 0; i < this.passes.length; i++) {\n    var pass = this.passes[i];\n\n    if (!pass.enabled) continue;\n\n    pass.render(this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive);\n\n    if (pass.needsSwap) {\n      if (maskActive) {\n        var context = this.renderer.context;\n\n        context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff);\n\n        this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, delta);\n\n        context.stencilFunc(context.EQUAL, 1, 0xffffffff);\n      }\n\n      this.swapBuffers();\n    }\n\n    if (pass instanceof _maskpass.MaskPass) {\n      maskActive = true;\n    } else if (pass instanceof _clearmaskpass.ClearMaskPass) {\n      maskActive = false;\n    }\n  }\n};\n\nEffectComposer.prototype.reset = function (renderTarget) {\n  if (renderTarget === undefined) {\n    renderTarget = this.renderTarget1.clone();\n\n    renderTarget.width = window.innerWidth;\n    renderTarget.height = window.innerHeight;\n  }\n\n  this.renderTarget1 = renderTarget;\n  this.renderTarget2 = renderTarget.clone();\n\n  this.writeBuffer = this.renderTarget1;\n  this.readBuffer = this.renderTarget2;\n};\n\nEffectComposer.prototype.setSize = function (width, height) {\n  var renderTarget = this.renderTarget1.clone();\n\n  renderTarget.width = width;\n  renderTarget.height = height;\n\n  this.reset(renderTarget);\n};\n\n// shared ortho camera\n\nEffectComposer.camera = new _three.OrthographicCamera(-1, 1, 1, -1, 0, 1);\n\nEffectComposer.quad = new _three.Mesh(new _three.PlaneGeometry(2, 2), null);\n\nEffectComposer.scene = new _three.Scene();\nEffectComposer.scene.add(EffectComposer.quad);\n\nexports.default = EffectComposer;\n\n//# sourceURL=webpack:///./node_modules/three-effectcomposer-es6/dist/index.js?");

/***/ }),

/***/ "./node_modules/three-effectcomposer-es6/dist/lib/clearmaskpass.js":
/*!*************************************************************************!*\
  !*** ./node_modules/three-effectcomposer-es6/dist/lib/clearmaskpass.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * @author alteredq / http://alteredqualia.com/\n */\n\nfunction ClearMaskPass(scene, camera) {\n  if (!(this instanceof ClearMaskPass)) return new ClearMaskPass(scene, camera);\n  this.enabled = true;\n}\n\nClearMaskPass.prototype.render = function (renderer, writeBuffer, readBuffer, delta) {\n  var context = renderer.context;\n  context.disable(context.STENCIL_TEST);\n};\n\nexports.ClearMaskPass = ClearMaskPass;\n\n//# sourceURL=webpack:///./node_modules/three-effectcomposer-es6/dist/lib/clearmaskpass.js?");

/***/ }),

/***/ "./node_modules/three-effectcomposer-es6/dist/lib/copyshader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/three-effectcomposer-es6/dist/lib/copyshader.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * @author alteredq / http://alteredqualia.com/\n *\n * Full-screen textured quad shader\n */\n\nvar CopyShader = {\n  uniforms: {\n    'tDiffuse': { type: 't', value: null },\n    'opacity': { type: 'f', value: 1.0 }\n  },\n  vertexShader: ['varying vec2 vUv;', 'void main() {', 'vUv = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\\n'),\n  fragmentShader: ['uniform float opacity;', 'uniform sampler2D tDiffuse;', 'varying vec2 vUv;', 'void main() {', 'vec4 texel = texture2D( tDiffuse, vUv );', 'gl_FragColor = opacity * texel;', '}'].join('\\n')\n};\n\nexports.CopyShader = CopyShader;\n\n//# sourceURL=webpack:///./node_modules/three-effectcomposer-es6/dist/lib/copyshader.js?");

/***/ }),

/***/ "./node_modules/three-effectcomposer-es6/dist/lib/maskpass.js":
/*!********************************************************************!*\
  !*** ./node_modules/three-effectcomposer-es6/dist/lib/maskpass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * @author alteredq / http://alteredqualia.com/\n */\n\nfunction MaskPass(scene, camera) {\n  if (!(this instanceof MaskPass)) return new MaskPass(scene, camera);\n\n  this.scene = scene;\n  this.camera = camera;\n\n  this.enabled = true;\n  this.clear = true;\n  this.needsSwap = false;\n\n  this.inverse = false;\n}\n\nMaskPass.prototype.render = function (renderer, writeBuffer, readBuffer, delta) {\n  var context = renderer.context;\n\n  // don't update color or depth\n\n  context.colorMask(false, false, false, false);\n  context.depthMask(false);\n\n  // set up stencil\n\n  var writeValue, clearValue;\n\n  if (this.inverse) {\n    writeValue = 0;\n    clearValue = 1;\n  } else {\n    writeValue = 1;\n    clearValue = 0;\n  }\n\n  context.enable(context.STENCIL_TEST);\n  context.stencilOp(context.REPLACE, context.REPLACE, context.REPLACE);\n  context.stencilFunc(context.ALWAYS, writeValue, 0xffffffff);\n  context.clearStencil(clearValue);\n\n  // draw into the stencil buffer\n\n  renderer.render(this.scene, this.camera, readBuffer, this.clear);\n  renderer.render(this.scene, this.camera, writeBuffer, this.clear);\n\n  // re-enable update of color and depth\n\n  context.colorMask(true, true, true, true);\n  context.depthMask(true);\n\n  // only render where stencil is set to 1\n\n  context.stencilFunc(context.EQUAL, 1, 0xffffffff); // draw if == 1\n  context.stencilOp(context.KEEP, context.KEEP, context.KEEP);\n};\n\nexports.MaskPass = MaskPass;\n\n//# sourceURL=webpack:///./node_modules/three-effectcomposer-es6/dist/lib/maskpass.js?");

/***/ }),

/***/ "./node_modules/three-effectcomposer-es6/dist/lib/renderpass.js":
/*!**********************************************************************!*\
  !*** ./node_modules/three-effectcomposer-es6/dist/lib/renderpass.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RenderPass = undefined;\n\nvar _three = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction RenderPass(scene, camera, overrideMaterial, clearColor, clearAlpha) {\n  if (!(this instanceof RenderPass)) return new RenderPass(scene, camera, overrideMaterial, clearColor, clearAlpha);\n\n  this.scene = scene;\n  this.camera = camera;\n\n  this.overrideMaterial = overrideMaterial;\n\n  this.clearColor = clearColor;\n  this.clearAlpha = clearAlpha !== undefined ? clearAlpha : 1;\n\n  this.oldClearColor = new _three.Color();\n  this.oldClearAlpha = 1;\n\n  this.enabled = true;\n  this.clear = true;\n  this.needsSwap = false;\n} /**\n   * @author alteredq / http://alteredqualia.com/\n   */\n\nRenderPass.prototype.render = function (renderer, writeBuffer, readBuffer, delta) {\n  this.scene.overrideMaterial = this.overrideMaterial;\n\n  if (this.clearColor) {\n    this.oldClearColor.copy(renderer.getClearColor());\n    this.oldClearAlpha = renderer.getClearAlpha();\n\n    renderer.setClearColor(this.clearColor, this.clearAlpha);\n  }\n\n  renderer.render(this.scene, this.camera, readBuffer, this.clear);\n\n  if (this.clearColor) {\n    renderer.setClearColor(this.oldClearColor, this.oldClearAlpha);\n  }\n\n  this.scene.overrideMaterial = null;\n};\n\nexports.RenderPass = RenderPass;\n\n//# sourceURL=webpack:///./node_modules/three-effectcomposer-es6/dist/lib/renderpass.js?");

/***/ }),

/***/ "./node_modules/three-effectcomposer-es6/dist/lib/shaderpass.js":
/*!**********************************************************************!*\
  !*** ./node_modules/three-effectcomposer-es6/dist/lib/shaderpass.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ShaderPass = undefined;\n\nvar _index = __webpack_require__(/*! ../index */ \"./node_modules/three-effectcomposer-es6/dist/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _three = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @author alteredq / http://alteredqualia.com/\n */\n\nfunction ShaderPass(shader, textureID) {\n  if (!(this instanceof ShaderPass)) return new ShaderPass(shader, textureID);\n\n  this.textureID = textureID !== undefined ? textureID : 'tDiffuse';\n\n  this.uniforms = _three.UniformsUtils.clone(shader.uniforms);\n\n  this.material = new _three.ShaderMaterial({\n    uniforms: this.uniforms,\n    vertexShader: shader.vertexShader,\n    fragmentShader: shader.fragmentShader\n  });\n\n  this.renderToScreen = false;\n\n  this.enabled = true;\n  this.needsSwap = true;\n  this.clear = false;\n}\n\nShaderPass.prototype.render = function (renderer, writeBuffer, readBuffer, delta) {\n  if (this.uniforms[this.textureID]) {\n    this.uniforms[this.textureID].value = readBuffer.texture;\n  }\n\n  _index2.default.quad.material = this.material;\n\n  if (this.renderToScreen) {\n    renderer.render(_index2.default.scene, _index2.default.camera);\n  } else {\n    renderer.render(_index2.default.scene, _index2.default.camera, writeBuffer, this.clear);\n  }\n};\n\nexports.ShaderPass = ShaderPass;\n\n//# sourceURL=webpack:///./node_modules/three-effectcomposer-es6/dist/lib/shaderpass.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, DataTexture3D, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, AnimationLoader, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, MeshMatcapMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, ACESFilmicToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RedFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, JSONLoader, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/gl13/js/MainScene.js":
/*!**********************************!*\
  !*** ./src/gl13/js/MainScene.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainScene; });\n/* harmony import */ var _utils_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/BaseScene */ \"./src/gl13/js/utils/BaseScene.js\");\n/* harmony import */ var _utils_Boids_Boids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Boids/Boids */ \"./src/gl13/js/utils/Boids/Boids.js\");\n/* harmony import */ var _shaders_pp_vs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/pp.vs */ \"./src/gl13/js/shaders/pp.vs\");\n/* harmony import */ var _shaders_pp_vs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_pp_vs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_pp_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/pp.fs */ \"./src/gl13/js/shaders/pp.fs\");\n/* harmony import */ var _shaders_pp_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_pp_fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three_effectcomposer_es6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three-effectcomposer-es6 */ \"./node_modules/three-effectcomposer-es6/dist/index.js\");\n/* harmony import */ var three_effectcomposer_es6__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(three_effectcomposer_es6__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\nclass MainScene extends _utils_BaseScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(renderer) {\n        super(renderer);\n        this.init();\n        this.animate();\n    }\n\n    init() {\n        this.time = 0;\n        this.clock = new THREE.Clock();\n        this.camera.position.set(0,3,10);\n        this.camera.lookAt(0,0,0);\n        \n        this.boids = new _utils_Boids_Boids__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.renderer,new THREE.Vector3(1,1,1));\n        this.scene.add(this.boids.obj);\n\n        this.composer = new three_effectcomposer_es6__WEBPACK_IMPORTED_MODULE_4___default.a(this.renderer);\n        this.composer.addPass(new three_effectcomposer_es6__WEBPACK_IMPORTED_MODULE_4__[\"RenderPass\"](this.scene,this.camera));\n\n        var effect = {\n            uniforms:{\n                tDiffuse:{\n                    value: null,\n                    type:'t',\n                },\n                time: {\n                    value: 0,\n                    type: \"f\",\n                }\n            },\n            vertexShader: _shaders_pp_vs__WEBPACK_IMPORTED_MODULE_2___default.a,\n            fragmentShader: _shaders_pp_fs__WEBPACK_IMPORTED_MODULE_3___default.a,\n        }\n        this.customPass = new three_effectcomposer_es6__WEBPACK_IMPORTED_MODULE_4__[\"ShaderPass\"](effect);\n        this.customPass.renderToScreen = true;\n        this.composer.addPass(this.customPass);\n    }\n\n    animate() {\n        this.time += this.clock.getDelta();\n        this.boids.update();\n\n        this.camera.position.z = Math.sin(this.time * 0.3) * 10;\n        this.camera.position.x = Math.cos(this.time * 0.3) * 10;\n        this.camera.lookAt(0,0,0);\n        // this.renderer.render(this.scene,this.camera);\n\n        // this.customPass.uniforms.time.value = this.time;\n        this.composer.render();\n        requestAnimationFrame(this.animate.bind(this));\n    }\n\n    Resize(width,height){\n        this.camera.aspect = width / height;\n        this.camera.updateProjectionMatrix();\n    }\n    \n    onTouchStart(){\n    }\n\n    onTouchMove(){\n    }\n\n    onTouchEnd(){\n\n    }\n\n}\n\n//# sourceURL=webpack:///./src/gl13/js/MainScene.js?");

/***/ }),

/***/ "./src/gl13/js/main.js":
/*!*****************************!*\
  !*** ./src/gl13/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MainScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .//MainScene */ \"./src/gl13/js/MainScene.js\");\n/* harmony import */ var _utils_ThreeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ThreeController */ \"./src/gl13/js/utils/ThreeController.js\");\n\n\n\nwindow.addEventListener('load',()=>{\n    var tc = new _utils_ThreeController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();        \n    tc.setScene(new _MainScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tc.renderer));\n})\n\n//# sourceURL=webpack:///./src/gl13/js/main.js?");

/***/ }),

/***/ "./src/gl13/js/plugins/GPUComputationRenderer.js":
/*!*******************************************************!*\
  !*** ./src/gl13/js/plugins/GPUComputationRenderer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GPUComputationRenderer; });\n/**\n * @author yomboprime https://github.com/yomboprime\n *\n * GPUComputationRenderer, based on SimulationRenderer by zz85\n *\n * The GPUComputationRenderer uses the concept of variables. These variables are RGBA float textures that hold 4 floats\n * for each compute element (texel)\n *\n * Each variable has a fragment shader that defines the computation made to obtain the variable in question.\n * You can use as many variables you need, and make dependencies so you can use textures of other variables in the shader\n * (the sampler uniforms are added automatically) Most of the variables will need themselves as dependency.\n *\n * The renderer has actually two render targets per variable, to make ping-pong. Textures from the current frame are used\n * as inputs to render the textures of the next frame.\n *\n * The render targets of the variables can be used as input textures for your visualization shaders.\n *\n * Variable names should be valid identifiers and should not collide with THREE GLSL used identifiers.\n * a common approach could be to use 'texture' prefixing the variable name; i.e texturePosition, textureVelocity...\n *\n * The size of the computation (sizeX * sizeY) is defined as 'resolution' automatically in the shader. For example:\n * #DEFINE resolution vec2( 1024.0, 1024.0 )\n *\n * -------------\n *\n * Basic use:\n *\n * // Initialization...\n *\n * // Create computation renderer\n * var gpuCompute = new GPUComputationRenderer( 1024, 1024, renderer );\n *\n * // Create initial state float textures\n * var pos0 = gpuCompute.createTexture();\n * var vel0 = gpuCompute.createTexture();\n * // and fill in here the texture data...\n *\n * // Add texture variables\n * var velVar = gpuCompute.addVariable( \"textureVelocity\", fragmentShaderVel, pos0 );\n * var posVar = gpuCompute.addVariable( \"texturePosition\", fragmentShaderPos, vel0 );\n *\n * // Add variable dependencies\n * gpuCompute.setVariableDependencies( velVar, [ velVar, posVar ] );\n * gpuCompute.setVariableDependencies( posVar, [ velVar, posVar ] );\n *\n * // Add custom uniforms\n * velVar.material.uniforms.time = { value: 0.0 };\n *\n * // Check for completeness\n * var error = gpuCompute.init();\n * if ( error !== null ) {\n *\t\tconsole.error( error );\n  * }\n *\n *\n * // In each frame...\n *\n * // Compute!\n * gpuCompute.compute();\n *\n * // Update texture uniforms in your visualization materials with the gpu renderer output\n * myMaterial.uniforms.myTexture.value = gpuCompute.getCurrentRenderTarget( posVar ).texture;\n *\n * // Do your rendering\n * renderer.render( myScene, myCamera );\n *\n * -------------\n *\n * Also, you can use utility functions to create ShaderMaterial and perform computations (rendering between textures)\n * Note that the shaders can have multiple input textures.\n *\n * var myFilter1 = gpuCompute.createShaderMaterial( myFilterFragmentShader1, { theTexture: { value: null } } );\n * var myFilter2 = gpuCompute.createShaderMaterial( myFilterFragmentShader2, { theTexture: { value: null } } );\n *\n * var inputTexture = gpuCompute.createTexture();\n *\n * // Fill in here inputTexture...\n *\n * myFilter1.uniforms.theTexture.value = inputTexture;\n *\n * var myRenderTarget = gpuCompute.createRenderTarget();\n * myFilter2.uniforms.theTexture.value = myRenderTarget.texture;\n *\n * var outputRenderTarget = gpuCompute.createRenderTarget();\n *\n * // Now use the output texture where you want:\n * myMaterial.uniforms.map.value = outputRenderTarget.texture;\n *\n * // And compute each frame, before rendering to screen:\n * gpuCompute.doRenderTarget( myFilter1, myRenderTarget );\n * gpuCompute.doRenderTarget( myFilter2, outputRenderTarget );\n * \n *\n *\n * @param {int} sizeX Computation problem size is always 2d: sizeX * sizeY elements.\n * @param {int} sizeY Computation problem size is always 2d: sizeX * sizeY elements.\n * @param {WebGLRenderer} renderer The renderer\n  */\n\nfunction GPUComputationRenderer( sizeX, sizeY, renderer ) {\n\n\tthis.variables = [];\n\n\tthis.currentTextureIndex = 0;\n\n\tvar scene = new THREE.Scene();\n\n\tvar camera = new THREE.Camera();\n\tcamera.position.z = 1;\n\n\tvar passThruUniforms = {\n\t\ttexture: { value: null }\n\t};\n\n\tvar passThruShader = createShaderMaterial( getPassThroughFragmentShader(), passThruUniforms );\n\n\tvar mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), passThruShader );\n\tscene.add( mesh );\n\n\n\tthis.addVariable = function( variableName, computeFragmentShader, initialValueTexture ) {\n\n\t\tvar material = this.createShaderMaterial( computeFragmentShader );\n\n\t\tvar variable = {\n\t\t\tname: variableName,\n\t\t\tinitialValueTexture: initialValueTexture,\n\t\t\tmaterial: material,\n\t\t\tdependencies: null,\n\t\t\trenderTargets: [],\n\t\t\twrapS: null,\n\t\t\twrapT: null,\n\t\t\tminFilter: THREE.NearestFilter,\n\t\t\tmagFilter: THREE.NearestFilter\n\t\t};\n\n\t\tthis.variables.push( variable );\n\n\t\treturn variable;\n\t\t\n\t};\n\n\tthis.setVariableDependencies = function( variable, dependencies ) {\n\n\t\tvariable.dependencies = dependencies;\n\n\t};\n\n\tthis.init = function() {\n\n\t\tif ( ! renderer.extensions.get( \"OES_texture_float\" ) ) {\n\n\t\t\treturn \"No OES_texture_float support for float textures.\";\n\n\t\t}\n\n\t\tif ( renderer.capabilities.maxVertexTextures === 0 ) {\n\n\t\t\treturn \"No support for vertex shader textures.\";\n\n\t\t}\n\n\t\tfor ( var i = 0; i < this.variables.length; i++ ) {\n\n\t\t\tvar variable = this.variables[ i ];\n\n\t\t\t// Creates rendertargets and initialize them with input texture\n\t\t\tvariable.renderTargets[ 0 ] = this.createRenderTarget( sizeX, sizeY, variable.wrapS, variable.wrapT, variable.minFilter, variable.magFilter );\n\t\t\tvariable.renderTargets[ 1 ] = this.createRenderTarget( sizeX, sizeY, variable.wrapS, variable.wrapT, variable.minFilter, variable.magFilter );\n\t\t\tthis.renderTexture( variable.initialValueTexture, variable.renderTargets[ 0 ] );\n\t\t\tthis.renderTexture( variable.initialValueTexture, variable.renderTargets[ 1 ] );\n\n\t\t\t// Adds dependencies uniforms to the ShaderMaterial\n\t\t\tvar material = variable.material;\n\t\t\tvar uniforms = material.uniforms;\n\t\t\tif ( variable.dependencies !== null ) {\n\n\t\t\t\tfor ( var d = 0; d < variable.dependencies.length; d++ ) {\n\n\t\t\t\t\tvar depVar = variable.dependencies[ d ];\n\n\t\t\t\t\tif ( depVar.name !== variable.name ) {\n\n\t\t\t\t\t\t// Checks if variable exists\n\t\t\t\t\t\tvar found = false;\n\t\t\t\t\t\tfor ( var j = 0; j < this.variables.length; j++ ) {\n\n\t\t\t\t\t\t\tif ( depVar.name === this.variables[ j ].name ) {\n\t\t\t\t\t\t\t\tfound = true;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif ( ! found ) {\n\t\t\t\t\t\t\treturn \"Variable dependency not found. Variable=\" + variable.name + \", dependency=\" + depVar.name;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\tuniforms[ depVar.name ] = { value: null };\n\n\t\t\t\t\tmaterial.fragmentShader = \"\\nuniform sampler2D \" + depVar.name + \";\\n\" + material.fragmentShader;\n\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tthis.currentTextureIndex = 0;\n\n\t\treturn null;\n\n\t};\n\n\tthis.compute = function() {\n\n\t\tvar currentTextureIndex = this.currentTextureIndex;\n\t\tvar nextTextureIndex = this.currentTextureIndex === 0 ? 1 : 0;\n\n\t\tfor ( var i = 0, il = this.variables.length; i < il; i++ ) {\n\n\t\t\tvar variable = this.variables[ i ];\n\n\t\t\t// Sets texture dependencies uniforms\n\t\t\tif ( variable.dependencies !== null ) {\n\n\t\t\t\tvar uniforms = variable.material.uniforms;\n\t\t\t\tfor ( var d = 0, dl = variable.dependencies.length; d < dl; d++ ) {\n\n\t\t\t\t\tvar depVar = variable.dependencies[ d ];\n\n\t\t\t\t\tuniforms[ depVar.name ].value = depVar.renderTargets[ currentTextureIndex ].texture;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// Performs the computation for this variable\n\t\t\tthis.doRenderTarget( variable.material, variable.renderTargets[ nextTextureIndex ] );\n\n\t\t}\n\n\t\tthis.currentTextureIndex = nextTextureIndex;\n\t};\n\n\tthis.getCurrentRenderTarget = function( variable ) {\n\n\t\treturn variable.renderTargets[ this.currentTextureIndex ];\n\n\t};\n\n\tthis.getAlternateRenderTarget = function( variable ) {\n\n\t\treturn variable.renderTargets[ this.currentTextureIndex === 0 ? 1 : 0 ];\n\n\t};\n\n\tfunction addResolutionDefine( materialShader ) {\n\n\t\tmaterialShader.defines.resolution = 'vec2( ' + sizeX.toFixed( 1 ) + ', ' + sizeY.toFixed( 1 ) + \" )\";\n\n\t}\n\tthis.addResolutionDefine = addResolutionDefine;\n\n\n\t// The following functions can be used to compute things manually\n\n\tfunction createShaderMaterial( computeFragmentShader, uniforms ) {\n\n\t\tuniforms = uniforms || {};\n\n\t\tvar material = new THREE.ShaderMaterial( {\n\t\t\tuniforms: uniforms,\n\t\t\tvertexShader: getPassThroughVertexShader(),\n\t\t\tfragmentShader: computeFragmentShader\n\t\t} );\n\n\t\taddResolutionDefine( material );\n\n\t\treturn material;\n\t}\n\tthis.createShaderMaterial = createShaderMaterial;\n\n\tthis.createRenderTarget = function( sizeXTexture, sizeYTexture, wrapS, wrapT, minFilter, magFilter ) {\n\n\t\tsizeXTexture = sizeXTexture || sizeX;\n\t\tsizeYTexture = sizeYTexture || sizeY;\n\n\t\twrapS = wrapS || THREE.ClampToEdgeWrapping;\n\t\twrapT = wrapT || THREE.ClampToEdgeWrapping;\n\n\t\tminFilter = minFilter || THREE.NearestFilter;\n\t\tmagFilter = magFilter || THREE.NearestFilter;\n\n\t\tvar renderTarget = new THREE.WebGLRenderTarget( sizeXTexture, sizeYTexture, {\n\t\t\twrapS: wrapS,\n\t\t\twrapT: wrapT,\n\t\t\tminFilter: minFilter,\n\t\t\tmagFilter: magFilter,\n\t\t\tformat: THREE.RGBAFormat,\n\t\t\ttype: ( /(iPad|iPhone|iPod)/g.test( navigator.userAgent ) ) ? THREE.HalfFloatType : THREE.FloatType,\n\t\t\tstencilBuffer: false,\n\t\t\tdepthBuffer: false\n\t\t} );\n\n\t\treturn renderTarget;\n\n\t};\n\n\tthis.createTexture = function() {\n\n\t\tvar a = new Float32Array( sizeX * sizeY * 4 );\n\t\tvar texture = new THREE.DataTexture( a, sizeX, sizeY, THREE.RGBAFormat, THREE.FloatType );\n\t\ttexture.needsUpdate = true;\n\n\t\treturn texture;\n\n\t};\n\n\n\tthis.renderTexture = function( input, output ) {\n\n\t\t// Takes a texture, and render out in rendertarget\n\t\t// input = Texture\n\t\t// output = RenderTarget\n\n\t\tpassThruUniforms.texture.value = input;\n\n\t\tthis.doRenderTarget( passThruShader, output);\n\n\t\tpassThruUniforms.texture.value = null;\n\n\t};\n\n\tthis.doRenderTarget = function( material, output ) {\n\n\t\tmesh.material = material;\n\t\trenderer.render( scene, camera, output );\n\t\tmesh.material = passThruShader;\n\n\t};\n\n\t// Shaders\n\n\tfunction getPassThroughVertexShader() {\n\n\t\treturn\t\"void main()\t{\\n\" +\n\t\t\t\t\"\\n\" +\n\t\t\t\t\"\tgl_Position = vec4( position, 1.0 );\\n\" +\n\t\t\t\t\"\\n\" +\n\t\t\t\t\"}\\n\";\n\n\t}\n\n\tfunction getPassThroughFragmentShader() {\n\n\t\treturn\t\"uniform sampler2D texture;\\n\" +\n\t\t\t\t\"\\n\" +\n\t\t\t\t\"void main() {\\n\" +\n\t\t\t\t\"\\n\" +\n\t\t\t\t\"\tvec2 uv = gl_FragCoord.xy / resolution.xy;\\n\" +\n\t\t\t\t\"\\n\" +\n\t\t\t\t\"\tgl_FragColor = texture2D( texture, uv );\\n\" +\n\t\t\t\t\"\\n\" +\n\t\t\t\t\"}\\n\";\n\n\t}\n\n}\n\n\n//# sourceURL=webpack:///./src/gl13/js/plugins/GPUComputationRenderer.js?");

/***/ }),

/***/ "./src/gl13/js/shaders/pp.fs":
/*!***********************************!*\
  !*** ./src/gl13/js/shaders/pp.fs ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"uniform float time;\\nuniform sampler2D tDiffuse;\\nvarying vec2 vUv;\\n#define N 16\\n\\nvoid main() {\\n    vec2 uv = vUv;\\n    vec2 u = uv * 2.0 - 1.0;\\n    vec3 c;\\n\\n    float w = max(.0,length(u)) * 0.03;\\n    // w *= smoothstep(0.5,1.0,sin(10.0 * 15.0)) * 5.0;\\n    // w += .01;\\n\\n    vec2 vig = u * w;\\n\\n    for(int i = 0; i < N; i++){\\n        vig *= 1.0 + float(i) * 0.01;\\n        c.x += texture2D(tDiffuse,uv + vig).x;\\n        c.y += texture2D(tDiffuse,uv + vig * 0.65).y;\\n        c.z += texture2D(tDiffuse,uv + vig * 0.88).z;\\n    }\\n    c /= float(N) - 5.0;\\n    gl_FragColor = vec4(c,1.0);\\n}\"\n\n//# sourceURL=webpack:///./src/gl13/js/shaders/pp.fs?");

/***/ }),

/***/ "./src/gl13/js/shaders/pp.vs":
/*!***********************************!*\
  !*** ./src/gl13/js/shaders/pp.vs ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"varying vec2 vUv;\\nvoid main() {\\n    vUv = uv;\\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n}\"\n\n//# sourceURL=webpack:///./src/gl13/js/shaders/pp.vs?");

/***/ }),

/***/ "./src/gl13/js/utils/BaseScene.js":
/*!****************************************!*\
  !*** ./src/gl13/js/utils/BaseScene.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseScene; });\nclass BaseScene {\n    constructor(renderer) {\n        this.renderer = renderer;\n        this.scene = new THREE.Scene();\n        this.camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 1000);\n    }\n\n    animate(){\n    }\n\n    onTouchStart(){\n    }\n\n    onTouchMove(){\n    }\n\n    onTouchEnd(){\n    }\n}\n\n//# sourceURL=webpack:///./src/gl13/js/utils/BaseScene.js?");

/***/ }),

/***/ "./src/gl13/js/utils/Boids/Boids.js":
/*!******************************************!*\
  !*** ./src/gl13/js/utils/Boids/Boids.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Boids; });\n/* harmony import */ var _shaders_computePosition_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders/computePosition.glsl */ \"./src/gl13/js/utils/Boids/shaders/computePosition.glsl\");\n/* harmony import */ var _shaders_computePosition_glsl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shaders_computePosition_glsl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shaders_computeVelocity_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/computeVelocity.glsl */ \"./src/gl13/js/utils/Boids/shaders/computeVelocity.glsl\");\n/* harmony import */ var _shaders_computeVelocity_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_computeVelocity_glsl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/fragment.glsl */ \"./src/gl13/js/utils/Boids/shaders/fragment.glsl\");\n/* harmony import */ var _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/vertex.glsl */ \"./src/gl13/js/utils/Boids/shaders/vertex.glsl\");\n/* harmony import */ var _shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _plugins_GPUComputationRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../plugins/GPUComputationRenderer */ \"./src/gl13/js/plugins/GPUComputationRenderer.js\");\n\n\n\n\n\n\n\nclass Boids{\n\n    constructor(renderer,range){\n        this.renderer = renderer;\n\n        this.computeRenderer;\n        this.computeTextureWidth = 85;\n        this.numParticle = this.computeTextureWidth * this.computeTextureWidth;\n\n        this.obj;\n        this.color = new THREE.Vector3(1,1,1);\n\n        this.time = 0;\n        this.clock = new THREE.Clock();\n        this.range = range;\n\n        this.comTexs = {\n            position:{\n                texture: null,\n                uniforms: null,\n            },\n            velocity:{\n                texture: null,\n                uniforms: null,\n            },\n        }\n\n        this.initComputeRenderer();\n        this.initParticles();\n    }\n\n    initComputeRenderer(){\n        this.computeRenderer = new _plugins_GPUComputationRenderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.computeTextureWidth,this.computeTextureWidth,this.renderer);\n        \n        let initPositionTex = this.computeRenderer.createTexture();\n        let initVelocityTex = this.computeRenderer.createTexture();\n\n        this.initPosition(initPositionTex);\n        this.initVelocity(initVelocityTex);\n    \n        this.comTexs.position.texture = this.computeRenderer.addVariable(\"texturePosition\",_shaders_computePosition_glsl__WEBPACK_IMPORTED_MODULE_0___default.a,initPositionTex);\n        this.comTexs.velocity.texture = this.computeRenderer.addVariable(\"textureVelocity\",_shaders_computeVelocity_glsl__WEBPACK_IMPORTED_MODULE_1___default.a,initVelocityTex);\n\n        this.computeRenderer.setVariableDependencies( this.comTexs.position.texture, [ this.comTexs.position.texture, this.comTexs.velocity.texture] );\n        this.comTexs.position.uniforms = this.comTexs.position.texture.material.uniforms;\n\n        this.computeRenderer.setVariableDependencies( this.comTexs.velocity.texture, [ this.comTexs.position.texture, this.comTexs.velocity.texture] );  \n        this.comTexs.velocity.uniforms = this.comTexs.velocity.texture.material.uniforms;\n        this.comTexs.velocity.uniforms.time = { value: 0};\n\n        this.computeRenderer.init();\n    }\n\n    update(){\n        this.time += this.clock.getDelta();\n        this.comTexs.velocity.uniforms.time.value = this.time;\n        this.computeRenderer.compute();\n        this.uni.texturePosition.value = this.computeRenderer.getCurrentRenderTarget(this.comTexs.position.texture).texture;\n        this.uni.textureVelocity.value = this.computeRenderer.getCurrentRenderTarget(this.comTexs.velocity.texture).texture;\n    }\n\n    initPosition(tex){\n        var texArray = tex.image.data;\n        let range = new THREE.Vector3(4,4,4);\n        for(var i = 0; i < texArray.length; i +=4){\n            texArray[i + 0] = Math.random() * range.x - range.x / 2;\n            texArray[i + 1] = Math.random() * range.y - range.y / 2;\n            texArray[i + 2] = Math.random() * range.z - range.z / 2;\n            texArray[i + 3] = 0.0;\n        }\n    }\n\n    initVelocity(tex){\n        var texArray = tex.image.data;\n        for(var i = 0; i < texArray.length; i +=4){\n            texArray[i + 0] = Math.random() * 1.0 - 0.5;\n            texArray[i + 1] = Math.random() * 1.0 - 0.5;\n            texArray[i + 2] = Math.random() * 1.0 - 0.5;\n        }\n    }\n\n    initParticles(){\n        let geo = new THREE.BufferGeometry();\n\n        //ジオメトリ初期化用の配列\n        var pArray = new Float32Array(this.numParticle * 3);\n        for(var i = 0; i < pArray.length; i++){\n            pArray[i] = 0;\n        }\n\n        //テクスチャ参照用のuvを取得\n        var uv = new Float32Array(this.numParticle * 2);\n        var p = 0;\n        for(var i = 0;i < this.computeTextureWidth; i ++){\n            for(var j = 0;j < this.computeTextureWidth; j ++){\n                uv[p++] = i / ( this.computeTextureWidth - 1);\n                uv[p++] = j / ( this.computeTextureWidth - 1);\n            }\n        }\n        geo.addAttribute('position', new THREE.BufferAttribute( pArray, 3 ) );\n        geo.addAttribute('uv', new THREE.BufferAttribute( uv, 2 ) );\n\n        this.uni = {\n            texturePosition : {value: null},\n            textureVelocity : {value: null},\n            textureTime : {value : null},\n            cameraConstant: { value: 4.0},\n            color:{ value: this.color},\n        }\n\n        let mat = new THREE.ShaderMaterial({\n            uniforms: this.uni,\n            vertexShader: _shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_3___default.a,\n            fragmentShader: _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2___default.a,\n            transparent: true,\n        });\n\n        this.obj = new THREE.Points(geo,mat);\n        this.obj.matrixAutoUpdate = false;\n        this.obj.updateMatrix();\n    }\n}\n\n//# sourceURL=webpack:///./src/gl13/js/utils/Boids/Boids.js?");

/***/ }),

/***/ "./src/gl13/js/utils/Boids/shaders/computePosition.glsl":
/*!**************************************************************!*\
  !*** ./src/gl13/js/utils/Boids/shaders/computePosition.glsl ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision highp float;\\nuniform vec3 start;\\nuniform bool shot;\\n\\nvoid main() {\\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\\n\\n    vec3 pos = texture2D( texturePosition, uv ).xyz;  \\n    vec3 vel = texture2D( textureVelocity, uv ).xyz;\\n\\n    pos += vel * 0.02;\\n\\n    gl_FragColor = vec4(pos,1.0);\\n}\"\n\n//# sourceURL=webpack:///./src/gl13/js/utils/Boids/shaders/computePosition.glsl?");

/***/ }),

/***/ "./src/gl13/js/utils/Boids/shaders/computeVelocity.glsl":
/*!**************************************************************!*\
  !*** ./src/gl13/js/utils/Boids/shaders/computeVelocity.glsl ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision highp float;\\nuniform float time;\\nuniform vec3 range;\\n\\n\\n//\\n// Description : Array and textureless GLSL 2D/3D/4D simplex \\n//               noise functions.\\n//      Author : Ian McEwan, Ashima Arts.\\n//  Maintainer : stegu\\n//     Lastmod : 20110822 (ijm)\\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\\n//               Distributed under the MIT License. See LICENSE file.\\n//               https://github.com/ashima/webgl-noise\\n//               https://github.com/stegu/webgl-noise\\n// \\n\\nvec3 mod289(vec3 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec4 mod289(vec4 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec4 permute(vec4 x) {\\n     return mod289(((x*34.0)+1.0)*x);\\n}\\n\\nvec4 taylorInvSqrt(vec4 r)\\n{\\n  return 1.79284291400159 - 0.85373472095314 * r;\\n}\\n\\nfloat snoise(vec3 v)\\n  { \\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\\n\\n// First corner\\n  vec3 i  = floor(v + dot(v, C.yyy) );\\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\\n\\n// Other corners\\n  vec3 g = step(x0.yzx, x0.xyz);\\n  vec3 l = 1.0 - g;\\n  vec3 i1 = min( g.xyz, l.zxy );\\n  vec3 i2 = max( g.xyz, l.zxy );\\n\\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\\n  vec3 x1 = x0 - i1 + C.xxx;\\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\\n\\n// Permutations\\n  i = mod289(i); \\n  vec4 p = permute( permute( permute( \\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\\n\\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\\n  float n_ = 0.142857142857; // 1.0/7.0\\n  vec3  ns = n_ * D.wyz - D.xzx;\\n\\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\\n\\n  vec4 x_ = floor(j * ns.z);\\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\\n\\n  vec4 x = x_ *ns.x + ns.yyyy;\\n  vec4 y = y_ *ns.x + ns.yyyy;\\n  vec4 h = 1.0 - abs(x) - abs(y);\\n\\n  vec4 b0 = vec4( x.xy, y.xy );\\n  vec4 b1 = vec4( x.zw, y.zw );\\n\\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\\n  vec4 s0 = floor(b0)*2.0 + 1.0;\\n  vec4 s1 = floor(b1)*2.0 + 1.0;\\n  vec4 sh = -step(h, vec4(0.0));\\n\\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\\n\\n  vec3 p0 = vec3(a0.xy,h.x);\\n  vec3 p1 = vec3(a0.zw,h.y);\\n  vec3 p2 = vec3(a1.xy,h.z);\\n  vec3 p3 = vec3(a1.zw,h.w);\\n\\n//Normalise gradients\\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\\n  p0 *= norm.x;\\n  p1 *= norm.y;\\n  p2 *= norm.z;\\n  p3 *= norm.w;\\n\\n// Mix final noise value\\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\\n  m = m * m;\\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \\n                                dot(p2,x2), dot(p3,x3) ) );\\n  }\\n\\nfloat snoise(float x){\\n    return snoise(vec3(0.0,0.0,x));\\n}\\nvec3 snoise3D(vec3 p){\\n    return vec3(\\n        snoise(p + vec3(76.2,35.2,55.2)),\\n        snoise(p + vec3(52.2,453.3,674.2)),\\n        snoise(p + vec3(234.2,47.2,85.2))\\n    );\\n    \\n}\\n\\nvec3 sphereWall(vec3 pos){\\n    float pp = pow(pos.x,2.0) + pow(pos.y,2.0) + pow(pos.z,2.0);\\n\\n    if(pp > 6.0){\\n        return -pos * 0.5;\\n    }\\n    return vec3(0.0);\\n}\\n\\nvoid main() {\\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\\n    float n = resolution.x * resolution.y;\\n    vec3 selfPos = texture2D( texturePosition, uv ).xyz;\\n    vec3 selfVel = texture2D( textureVelocity, uv ).xyz;\\n\\n    vec3 sf = vec3(0.0);\\n    float sn = 0.0;\\n\\n    vec3 avgv = vec3(0.0);\\n    float vn = 0.0;\\n\\n    vec3 avgp = vec3(0.0);\\n    float pn = 0.0;\\n\\n    for(float i = 0.0; i < resolution.x; i += 1.0){\\n        for(float j = 0.0; j < resolution.y; j += 1.0){\\n            if(i == gl_FragCoord.x || j == gl_FragCoord.y) continue;\\n\\n            vec2 othUV = vec2(i,j) / resolution.xy;\\n            vec3 othPos = texture2D(texturePosition,othUV).xyz;\\n            vec3 othVel = texture2D(textureVelocity,othUV).xyz;\\n\\n            vec3 diff = othPos - selfPos;\\n            float dis = length(diff);\\n\\n            if(dis < 0.5){\\n                sf += -diff;\\n                sn++;\\n\\n                if(dis < 0.4){\\n                    avgv += othVel;\\n                    vn++;\\n                }\\n\\n                avgp += othPos;\\n                pn++;\\n            }\\n        }\\n    }\\n\\n    vec3 accel = vec3(0.0);\\n    \\n    accel += sphereWall(selfPos);\\n    accel += sf / float(sn) * 2.9;\\n    accel += avgv / float(vn) * 9.0;\\n    accel += avgp / float(pn) * 0.01;\\n\\n\\n    //velupdate\\n    selfVel += accel * 0.1;\\n    vec3 dir = normalize(selfVel);\\n    float speed = length(selfVel);\\n    selfVel = clamp(speed,.1,0.4) * dir;\\n\\n    selfVel += snoise3D(selfPos * 1.0 + vec3(.0,-time * 0.5,.0)) * 0.07;\\n    gl_FragColor = vec4( selfVel, 1.0 );\\n}\"\n\n//# sourceURL=webpack:///./src/gl13/js/utils/Boids/shaders/computeVelocity.glsl?");

/***/ }),

/***/ "./src/gl13/js/utils/Boids/shaders/fragment.glsl":
/*!*******************************************************!*\
  !*** ./src/gl13/js/utils/Boids/shaders/fragment.glsl ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision highp float;\\nvarying vec4 vColor;\\nvoid main() {\\n    gl_FragColor = vColor;\\n}\"\n\n//# sourceURL=webpack:///./src/gl13/js/utils/Boids/shaders/fragment.glsl?");

/***/ }),

/***/ "./src/gl13/js/utils/Boids/shaders/vertex.glsl":
/*!*****************************************************!*\
  !*** ./src/gl13/js/utils/Boids/shaders/vertex.glsl ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision highp float;\\n\\nuniform sampler2D texturePosition;\\nuniform sampler2D textureVelocity;\\nuniform sampler2D textureTime;\\n\\nuniform vec3 color;\\nvarying vec4 vColor;\\n\\nvoid main() {\\n    vec4 posTemp = texture2D( texturePosition, uv );\\n    vec3 pos = posTemp.xyz;\\n    \\n    vec4 velTmp = texture2D( textureVelocity, uv );\\n    vec3 vel = velTmp.xyz;\\n\\n    vec4 timeTmp = texture2D( textureTime, uv );\\n    vec3 time = timeTmp.xyz;\\n    vColor = vec4(color,1.0);\\n\\n    vec4 mvPosition = modelViewMatrix * vec4( pos + position, 1.0 );\\n\\n\\n    gl_PointSize = 15.0 / -mvPosition.z ;\\n\\n    gl_Position = projectionMatrix * mvPosition;\\n}\"\n\n//# sourceURL=webpack:///./src/gl13/js/utils/Boids/shaders/vertex.glsl?");

/***/ }),

/***/ "./src/gl13/js/utils/Cursor.js":
/*!*************************************!*\
  !*** ./src/gl13/js/utils/Cursor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cursor; });\nclass Cursor {\n    constructor() {\n        this._x = -1;\n        this._y = -1;\n        this._deltaY;\n        this._deltaX\n        this._touchDown = false;\n    }\n\n    set x(x) {\n        if (this._x == -1) this._deltaX = 0;\n        else this._deltaX = x - this._x\n        this._x = x;\n    }\n    get x() {\n        return this._x;\n    }\n\n    set y(y) {\n        if (this._y == -1) this._deltaY = 0;\n        else this._deltaY = y - this._y\n        this._y = y;\n    }\n\n    get y() {\n        return this._y;\n    }\n\n    get deltaX() {\n        if (this._deltaX != null) return this._deltaX;\n        else return 0;\n    }\n\n    get deltaY() {\n        if (this._deltaY != null) return this._deltaY;\n        else return 0;\n    }\n\n    TouchStart(cursor) {\n        this._touchDown = true;\n        if (cursor.pageX) {\n            this.x = cursor.pageX;\n            this.y = cursor.pageY;\n        } else {\n            this.x = cursor.touches[0].clientX;\n            this.y = cursor.touches[0].clientY;\n        }\n    }\n\n    TouchMove(cursor) {\n        if (this._touchDown == true) {\n            if (cursor.pageX) {\n                this.x = cursor.pageX;\n                this.y = cursor.pageY;\n            } else {\n                this.x = cursor.touches[0].clientX;\n                this.y = cursor.touches[0].clientY;\n            }\n        }\n    }\n\n    TouchEnd() {\n        this._touchDown = false;\n        this._x = -1;\n        this._y = -1;\n    }\n}\n\n//# sourceURL=webpack:///./src/gl13/js/utils/Cursor.js?");

/***/ }),

/***/ "./src/gl13/js/utils/ThreeController.js":
/*!**********************************************!*\
  !*** ./src/gl13/js/utils/ThreeController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ThreeGraphic; });\n/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cursor */ \"./src/gl13/js/utils/Cursor.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\nwindow.THREE = three__WEBPACK_IMPORTED_MODULE_1__;\n\nclass ThreeGraphic{\n        constructor(){\n        this.currentScene;\n        this.canvas = document.querySelector('#canvas');\n\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__[\"WebGLRenderer\"]({\n            canvas: this.canvas,\n        });\n        \n        this.renderer.setSize(window.innerWidth,window.innerHeight);\n        this.renderer.setPixelRatio(1);\n\n        this.cursor = new _Cursor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.userAgent = navigator.userAgent;    \n        this.isTouch = false;\n    \n        this.init();\n    }\n\n    init(){ \n        if(this.userAgent.indexOf('iPhone') >= 0 || this.userAgent.indexOf('iPad') >= 0 || this.userAgent.indexOf('Android') >= 0){    \n            window.addEventListener('touchstart',this.onTouchStart.bind(this));\n            window.addEventListener('touchmove',this.onTouchMove.bind(this),{passive: false});\n            window.addEventListener('touchend',this.onTouchEnd.bind(this));\n        }else{\n            window.addEventListener('mousedown',this.onTouchStart.bind(this));\n            window.addEventListener('mousemove',this.onTouchMove.bind(this));\n            window.addEventListener('mouseup',this.onTouchEnd.bind(this));\n        }\n        window.addEventListener('orientationchange',this.onOrientationDevice.bind(this));\n        window.addEventListener('resize',this.onWindowResize.bind(this));\n    }\n    \n    animate(){\n        if(this.currentScene){\n            this.currentScene.animate();\n        }\n    }\n\n    setScene(scene){\n        console.log('setScene');\n        this.currentScene = scene;\n    }\n\n    onWindowResize(){\n        var width = window.innerWidth;\n        var height = window.innerHeight;\n        this.renderer.setSize(width,height);\n\n        if(this.currentScene){\n            this.currentScene.Resize(width,height);\n        }\n    }\n\n    onOrientationDevice(){\n        this.onWindowResize();\n    }\n\n    onTouchStart(event){\n        this.isTouch = true;\n\n        if(this.cursor){\n            this.cursor.TouchStart(event);\n        }\n\n        if(this.currentScene){\n            this.currentScene.onTouchStart(this.cursor);\n        }\n    }\n\n    onTouchMove(event){\n        event.preventDefault();\n        if(!this.isTouch) return;\n        if(this.cursor){\n            this.cursor.TouchMove(event);\n        }\n\n        if(this.currentScene){\n            this.currentScene.onTouchMove(this.cursor);\n        }\n    }\n\n    onTouchEnd(event){\n        this.isTouch = false;\n\n        if(this.cursor){\n            this.cursor.TouchEnd(event);\n        }\n\n        if(this.currentScene){\n            this.currentScene.onTouchEnd(this.cursor);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/gl13/js/utils/ThreeController.js?");

/***/ })

/******/ });