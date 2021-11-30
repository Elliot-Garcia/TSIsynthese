#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

//Un Fragment Shader minimaliste
void main (void)
{
  //Couleur du fragment
	float x=(gl_FragCoord.x-300)/600.0;
	float y=(gl_FragCoord.y-300)/600.0;
	float r=0.0;
	float g=0.0;
	if(pow((pow(x,2) + pow(y,2)),0.5) > (0.25*0.8)) {
		g=1.0;
		r=0.0;
	}
	else {
		g=0.0;
		r=1.0;
	}
	color = vec4(r,g,0.0,0.0);
}