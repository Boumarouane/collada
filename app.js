// Variables
var scene, camera, renderer, material, geometry, mesh, dae, collada, malha, loader;

// ! initialisation
const init = () => {

    let container = document.querySelector('#container');

    // Configuration renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild( renderer.domElement );
    
    // Configuration camera
    let fov = 30;
    let aspect = 2;
    let near = 0.1;
    let far = 2000;
    camera = new THREE.PerspectiveCamera(fov,aspect, near, far);
    camera.position.set(0, 0, 30);  // (x, y, z)
    // camera.lookAt(0, 0, 0);

    // Configuration Scene
    scene = new THREE.Scene();

    // ColladaLoader

    const loader = new THREE.ColladaLoader();
			loader.load( './mirahi-face8.dae', function ( collada ) {
			let dae = collada.scene;
            scene.add(dae)
            dae.position.set(-2,-3,0)
            dae.rotation.x = 6;

            });

    // GLTF Loader

    // loader = new THREE.GLTFLoader();
    // loader.load("./chuck_collada_test2/scene.gltf", function(object) {
    //     let model = object.scene;
    //     model.position.set(0, 0, 0);
    //     scene.add(model);
    // });

    // Config light
   let light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
    directionalLight.position.set( 1, 100, 0 );
    scene.add( directionalLight );

    // config orbitcontrols 
    let controls = new THREE.OrbitControls(camera, renderer.domElement);
}


// ! Animation
const animate = () => {    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
animate();