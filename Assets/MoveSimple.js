#pragma strict

var speed : float = 3.0;
var rotateSpeed : float = 10.0;
private var isTouchDevice : boolean = false;

function Awake() {
    if (Application.platform == RuntimePlatform.IPhonePlayer) 
        isTouchDevice = true; 
    else
        isTouchDevice = false; 
}

function Update () {

    var clickDetected : boolean;
    var touchPosition : Vector3;
    
    // Detect click and calculate touch position
    if (isTouchDevice) {
        clickDetected = (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);
        touchPosition = Input.GetTouch(0).position;
    } else {
        clickDetected = (Input.GetMouseButtonDown(0));
        touchPosition = Input.mousePosition;
    }
    
    // Detect clicks
    if (clickDetected) {        
        // Check if the GameObject is clicked by casting a
        // Ray from the main camera to the touched position.
        var ray : Ray = Camera.main.ScreenPointToRay 
                            (touchPosition);
        var hit : RaycastHit;
        // Cast a ray of distance 100, and check if this
        // collider is hit.
        if (GetComponent.<Collider>().Raycast (ray, hit, 100.0)) {
            // Log a debug message
            Debug.Log("Moving the target");
            // Move the target forward
            transform.Translate(Vector3.forward * speed);       
            // Rotate the target along the y-axis
            transform.Rotate(Vector3.up * rotateSpeed);
        } else {
            // Clear the debug message
            Debug.Log("");
        }
    }
}