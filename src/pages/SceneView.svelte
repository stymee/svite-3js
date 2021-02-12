<script lang="ts">
    import {onMount} from 'svelte';
    //import * as THREE from 'three';
    import {
        Scene,
        PerspectiveCamera,
        WebGLRenderer,
        AmbientLight,
        DirectionalLight,
        PointLight,
        Mesh,
        BoxGeometry,
        MeshStandardMaterial,
        MeshPhongMaterial,
        PointLightHelper,
        AxesHelper,
        GridHelper,
        CameraHelper
    } from 'three';
    import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

    export let location;

    let controls: OrbitControls;
    let renderer: WebGLRenderer;

    const scene = new Scene();
    const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 10;

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshStandardMaterial({color: 0x00ff00});
    const cube = new Mesh(geometry, material);
    cube.position.set(0.5, 0.5, 0.5);

    scene.add(cube);
    scene.add(new AmbientLight(0xffffff, 0.3));

    const axes = new AxesHelper(10);
    scene.add(axes);

    const grid = new GridHelper(20, 20);
    grid.position.set(0, -0.001, 0);
    scene.add(grid);

    //const light = new DirectionalLight(0xffffff, 0.35);
    const sceneLight = new PointLight(0xffffff, 0.75);
    const sceneLightHelper = new PointLightHelper(sceneLight, 0.05);
    //light.position.set(20, 10, 5).normalize();
    sceneLight.position.set(5, 5, 1);
    scene.add(sceneLight);
    scene.add(sceneLightHelper);

    // const cameraLight = new PointLight(0xffffff, 0.75);
    // cameraLight.position.set(5, 5, 5);
    // camera.add(cameraLight);

    const animate = () => {
        requestAnimationFrame(animate);

        //cube.rotation.x += 0.01;
        //cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        controls.update();
    };

    const resize = () => {
        // console.log(Date.now(), 'in resize');
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    };

    export const createScene = el => {
        renderer = new WebGLRenderer({antialias: true, canvas: el});
        // controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.screenSpacePanning = true;
        controls.zoomSpeed = 4;
        //controls.maxPolarAngle = Math.PI * 0.5;
        //controls.minDistance = 1000;
        //controls.maxDistance = 5000;
        resize();
        animate();
    };

    window.addEventListener('resize', resize);

    let el;

    onMount(() => {
        createScene(el);
    });
</script>

<canvas bind:this={el} />

<style>
    canvas {
        background-color: darkslategrey;
    }
</style>
