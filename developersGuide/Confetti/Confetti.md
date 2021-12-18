
# How to use Confetti Library for HarmonyOS: A developer’s Guide

## **1. Introduction**

Confetti is a Harmony particle system library used to stream particles in one shot,for allotted duration and for infinite stream.Particles can be animated on screen containing components such as images,text with required velocity,acceleration and orientation using Confetti.

To get started right away, head on to [Gitee](https://gitee.com/HarmonyOS-tpc/confetti)


## **2. Typical Use Cases**
This library - com.github.jinatonic.confetti, is very useful in the development of applications which are in our daily use. Some of such examples mentioned below:

<div align="center">
<table>
    <tr>
        <td>
        	<ul><li><b>Sending wishes with Single Stream Confetti</b></br></li><ul>
        </td>
	<td>
		<ul><li><b>Sending wishes with Confetti streaming for fixed duration</b></br></li><ul>
        </td>
    </tr>
    <tr>
        <td width="50%"><p align="center"><img src="Confetti Images/Stream Once.gif" alt="Italian Trulli" style="width:200px;height:380px;"></p></td>
	<td width="50%"><p align="center"><img src="Confetti Images/Stream For Duration.gif" alt="Italian Trulli" style="width:200px;height:380px;"></p></td>
    </tr>
</table>
</div>
<div align="center">
<table>
	<tr>
        <td>
        	<ul><li><b>Sending wishes with Infinite Stream Confetti</b></br></li><ul>
        </td>
	</tr>
	<tr>
        	<td width="50%"><p align="center"><img src="Confetti Images/Infinite Stream.gif" alt="Italian Trulli" style="width:200px;height:380px;"></p></td>
    	</tr>	
</table>
</div>


## **3. Capability**
In this section, we can see the list of features which the library provides which makes the use of this library very easy and friendly. Primarily, this library supports customization of component attributes using the below mechanism.

* **Customization via Java APIs**</br>
In case we need to customize the component during run time, we also have the flexibility to do that using the JAVA APIs which the library exposes. The APIs will also help us to utilize the features provided from its parent “ConfettiManager” Class 

## **4. Features**
Features supported by this component includes the below:
* **Raining Confetti** </br>
This feature can be used to configure confetti falling from top,from a point or from particular confetti source defined using coordinates
* **Explosion Confetti** </br>
Confetti can be set exploding out in all directions based on X and Y coordinates
* **Circle Confetti** </br>
This feature is to display particles in circular shape along with set color and radius for particles
* **Bitmap Confetti** </br>
Particle shape can be set using bitmap image instead of regular shapes used for displaying confetti.
* **Particle Animation Orientation** </br>
This feature enables user to change orientation of particles animation

## **5. Installation**
For using the library in your HarmonyOS mobile app, you need to first install it by following below methods.

```groovy
dependencies {
	implementation fileTree(dir: 'libs', include: ['*.har'])
	implementation 'io.openharmony.tpc.thirdlib:confetti:1.0.5'
	testCompile 'junit:junit:4.12'
}
```


## **6. API usage examples**
In this section, we can have a look at some the examples where the APIs of this library is put to use and the results which we can acheive.

### Example 1: Streaming Explosion Confetti for 10seconds <br>

<table>
    <tr>
        <td width=700px>
        <pre>

<b><u>Java Slice</u>:</b>

DirectionalLayout componentContainer = 
		findComponentById(ResourceTable.Id_directionalLayout);
Button streamBtn = 
		findComponentById(ResourceTable.Id_streamWithDuration_btn);
ResourceManager resourceManager = getResourceManager();
try {
    int goldDark = resourceManager
    		.getElement(ResourceTable.Color_gold_dark)
		.getColor();
    int goldMed = resourceManager
    	.getElement(ResourceTable.Color_gold_med)
    	.getColor();
    int gold = resourceManager
    	.getElement(ResourceTable.Color_gold2)
	.getColor();
    int goldLight = resourceManager
    	.getElement(ResourceTable.Color_gold_light)
    	.getColor();
    colors = new int[] {goldDark, goldMed, gold, goldLight};
} catch (IOException | NotExistException | WrongTypeException e) {
    e.printStackTrace();
}
streamBtn.setClickedListener(new Component.ClickedListener() {
    @Override
    public void onClick(Component component) {
        final int centerX = componentContainer.getWidth() / 2;
        final int centerY = componentContainer.getHeight() / 5* 2;
        CommonConfetti
		.explosion(componentContainer, centerX, centerY, colors)
                .stream(10000);
        }
});
        </pre>
        </td>
        <td width=300px>
        <p align="center"><img src="Confetti Images/Explosion Confetti.gif" alt="Italian Trulli" style="width:200px;height:400px;"></p>
        </td>
    </tr>
</table>

### Example 2: Falling Confetti from Point with defined velocity and acceleration for particles<br>
<table>
    <tr>
        <td width=700px>
        <pre>

<b><u>Java Slice</u>:</b>
  streamBtn.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                int size = AttrHelper.vp2px(102, getContext());
                ConfettiSource confettiSource = new ConfettiSource(size, size);
                int velocitySlow = AttrHelper.vp2px(50, getContext());
                int velocityNormal = AttrHelper.vp2px(100, getContext());
                int velocityFast = AttrHelper.vp2px(200, getContext());
                CommonConfetti commonConfetti =
                        CommonConfetti.rainingConfetti(componentContainer, confettiSource, colors);
                commonConfetti.getConfettiManager()
                        .setVelocityX(velocityFast, velocityNormal)
                        .setAccelerationX(-velocityNormal, velocitySlow)
                        .setTargetVelocityX(0, velocitySlow / 2f)
                        .setVelocityY(velocityNormal, velocitySlow)
                        .setEmissionDuration(5000)
                        .setEmissionRate(20)
                        .animate();
            }
        });
</pre>
</td>
        <td width=300px>
        <p align="center"><img src="Confetti Images/Falling Confetti From Point.gif" alt="Italian Trulli" style="width:200px;height:400px;"></p>
        </td>
    </tr>
</table>

### Example 3: Bitmap Confetti with listener<br>
   <table>
    <tr>
        <td width=700px>
        <pre>

<b><u>Java Slice</u>:</b><br>
size = AttrHelper.vp2px(6,getContext());
        velocitySlow = AttrHelper.vp2px(50,getContext());
        velocityNormal = AttrHelper.vp2px(100,getContext());
        ImageSource.SourceOptions sourceOptions = new ImageSource.SourceOptions();
        ImageSource source = null;
        try {
            source = ImageSource.create(getResourceManager()
	    			.getResource(ResourceTable.Media_Emoji),sourceOptions);
        } catch (IOException | NotExistException e) {
            e.printStackTrace();
        }
        ImageSource.DecodingOptions decodingOptions = new ImageSource.DecodingOptions();
        int s = AttrHelper.vp2px(30,getContext());
        decodingOptions.desiredSize = new Size(s,s);
        bitmap = source.createPixelmap(decodingOptions);
        streamBtn.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                final ConfettiSource confettiSource 
		= new ConfettiSource(0, -size, componentContainer.getWidth(), -size);
                ConfettiManager confettiManager 
		= new ConfettiManager(MainAbilitySlice.this,MainAbilitySlice.this, 
					confettiSource, componentContainer)
                        .setVelocityX(0, velocitySlow)
                        .setVelocityY(velocityNormal, velocitySlow)
                        .setRotationalVelocity(180, 90)
                        .setEmissionDuration(10000)
                        .setEmissionRate(20)
                        .setConfettiAnimationListener(MainAbilitySlice.this)
                        .animate();
            }
        });
       }
    @Override
    public Confetto generateConfetto(Random random) {
        return new BitmapConfetto(bitmap);
    }
    @Override
    public void onAnimationStart(ConfettiManager confettiManager) {
		ToastDialog dialog = new ToastDialog(getContext());
        dialog.setText("Starting confetti animation").setDuration(1500).show();
    }
    @Override
    public void onAnimationEnd(ConfettiManager confettiManager) {
        numConfettiOnScreen = 0;
        updateNumConfettiTxt();
        ToastDialog dialog = new ToastDialog(getContext());
        dialog.setText("Ending confetti animation").setDuration(1500).show();
    }
    @Override
    public void onConfettoEnter(Confetto confetto) {
        numConfettiOnScreen++;
        updateNumConfettiTxt();
    }
    @Override
    public void onConfettoExit(Confetto confetto) {
        numConfettiOnScreen--;
        updateNumConfettiTxt();
    }
    private void updateNumConfettiTxt() {
        try {
            numConfettiTxt.setText(getResourceManager()
	    .getElement(ResourceTable.String_num_confetti_desc).getString(numConfettiOnScreen));
        } catch (IOException | NotExistException | WrongTypeException e) {
            e.printStackTrace();
        }
    }
</pre>
</td>
<td width=300px>
    <p align="center"><img src="Confetti Images/BitMap Confetti.gif" alt="Italian Trulli" style="width:200px;height:400px;"></p>
</td>
</tr>
</table>

### Example 4: Terminate Confetti streaming<br>

<table>
    <tr>
        <td width=700px>
        <pre>
<b><u>Java Slice</u>:</b><br>
final CommonConfetti[] commonConfetti = new CommonConfetti[1];
        streamBtn.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                commonConfetti[0] = CommonConfetti
		.rainingConfetti(componentContainer,colors);
                commonConfetti[0].infinite();
            }
        });
        stopBtn.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                commonConfetti[0].getConfettiManager().terminate();
            }
        });
</br>
</pre>
  </td>
     <td width=300px>
        <p align="center"><img src="Confetti Images/Terminate Confetti.gif" alt="Italian Trulli" style="width:200px;height:400px;"></p>
    </td>
</tr>
</table>

### Example 5: Confetti with particle orientation<br>

<table>
    <tr>
        <td width=700px>
        <pre>
<b><u>Java Slice</u>:</b><br>
CommonConfetti.rainingConfetti(container, getColors())
                .getConfettiManager()
                .setNumInitialCount(0)
                .setEmissionDuration(ConfettiManager.INFINITE_DURATION)
                .setEmissionRate(20)
                .setInitialRotation(6)
                .setRotationalAcceleration(30,12)
                .setRotationalVelocity(10,4)
                .animate();
</br>
</pre>
  </td>
     <td width=300px>
        <p align="center"><img src="Confetti Images/Particle rotation.gif" alt="Italian Trulli" style="width:200px;height:400px;"></p>
    </td>
</tr>
</table><br>

### **List of public APIs for app-developer**
The public methods below will help us to operate on the component at runtime.

**Public  Methods**
<table>
<tr>
    <td>
			<li>oneShot()</li>
            <li>stream(long durationInMillis)</li>
			<li>infinite()</li>
			<li>animate()</li>
			<li>terminate()</li>
			<li>ConfettiAnimationListener</li>
			<li>ConfettiAnimationListenerAdapter</li>
			<li>bind(List<Confetto> confetti)</li>
			<li>setTouchEnabled(boolean touchEnabled)</li>
			<li>terminate()</li>
			<li>reset()</li>
			<li>generateConfetto(Random random)</li>
			<li>BitmapConfetto(Bitmap bitmap)</li>
			<li>CircleConfetto(int color, float radius)</li>
			<li>getConfettiManager()</li>
            <li>setBound(Rect bound)</li>
			</td>
			<td>
			<li>setNumInitialCount(int numInitialCount)</li>
			<li>setEmissionDuration(long emissionDurationInMillis)</li>
			<li>setEmissionRate(float emissionRate)</li>
			<li>enableFadeOut(Interpolator fadeOutInterpolator)</li>
			<li>disableFadeOut()</li>
			<li>setTouchEnabled(boolean touchEnabled)</li>            
			<li>setTTL(long ttlInMillis)</li>
			<li>setVelocityX(float velocityX)</li>
			<li>setVelocityX(float velocityX, float velocityDeviationX)</li>
			<li>setVelocityY(float velocityY)</li>
			<li>setVelocityY(float velocityY, float velocityDeviationY)</li>
			<li>setAccelerationX(float accelerationX)</li>
			<li>setAccelerationY(float accelerationY)</li>
			<li>setTargetVelocityX(float targetVelocityX)</li>
			<li>setTargetVelocityY(float targetVelocityY)</li>
			<li>setInitialRotation(int initialRotation)</li>
			</td>
			</tr>
			</table>
			<table>
			<tr>
			<td>
			<li>setRotationalVelocity(float rotationalVelocity)</li>
			<li>setConfettiAnimationListener(ConfettiAnimationListener listener)</li>
			<li>explosion(ComponentContainer container, int x, int y, int[] colors)</li>
            <li>rainingConfetti(ComponentContainer container, int[] colors)</li>
            <li>rainingConfetti(ComponentContainer container,ConfettiSource confettiSource, int[] colors)</li>
			<li>setRotationalVelocity(float rotationalVelocity,float rotationalVelocityDeviation)</li>
			<li>setRotationalAcceleration(float rotationalAcceleration)</li>
			<li>setRotationalAcceleration(float rotationalAcceleration,float rotationalAccelerationDeviation)</li>
			<li>setTargetRotationalVelocity(float targetRotationalVelocity)</li>
			<li>setTargetRotationalVelocity(float targetRotationalVelocity,float targetRotationalVelocityDeviation)</li>
			<li>ShimmeringConfetto(Bitmap bitmap, int fromColor, int toColor, long waveLength,Random random)</li>
			<li>setAccelerationX(float accelerationX, float accelerationDeviationX)</li>
			<li>setAccelerationY(float accelerationY, float accelerationDeviationY)</li>
			<li>setTargetVelocityX(float targetVelocityX,float targetVelocityXDeviation)</li>
			<li>setTargetVelocityY(float targetVelocityY,float targetVelocityYDeviation)</li>
			<li>setInitialRotation(int initialRotation, int initialRotationDeviation)</li>
    </td>
  
</tr>
</table>

## **7. Conclusion**
Confetti is a very easy to use and very powerful library.The performance of the library is very good even when it works on one of the latest operating systems in the world, which is HarmonyOS!
* For more exciting libraries to develop your app, peep into third-party-components at </br>
[OpenHarmony-TPC](https://gitee.com/openharmony-tpc)

* To know more about the developement work happening on harmony application layer, and even be part of the exciting stuff, watch this space of [Application-Library Engineering Group](https://github.com/applibgroup)
