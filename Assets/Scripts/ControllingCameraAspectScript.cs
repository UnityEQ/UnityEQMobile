using UnityEngine;
using System.Collections;

public class ControllingCameraAspectScript : MonoBehaviour
 {
  
    // Use this for initialization
     void Start () {
          float TARGET_WIDTH = 1920.0f;
          float TARGET_HEIGHT = 1080.0f;
          int PIXELS_TO_UNITS = 1; // 1:1 ratio of pixels to units
 
          float desiredRatio = TARGET_WIDTH / TARGET_HEIGHT;
          float currentRatio = (float)Screen.width/(float)Screen.height;
 
          if(currentRatio >= desiredRatio)
          {
               // Our resolution has plenty of width, so we just need to use the height to determine the camera size
               Camera.main.orthographicSize = TARGET_HEIGHT / 2 / PIXELS_TO_UNITS;
          }
          else
          {
               // Our camera needs to zoom out further than just fitting in the height of the image.
               // Determine how much bigger it needs to be, then apply that to our original algorithm.
               float differenceInSize = desiredRatio / currentRatio;
               Camera.main.orthographicSize = TARGET_HEIGHT / 2 / PIXELS_TO_UNITS * differenceInSize;
          }
     }
 
     // Update is called once per frame
     void Update () {
     }
}