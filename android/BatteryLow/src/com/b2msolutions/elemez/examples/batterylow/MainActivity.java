package com.b2msolutions.elemez.examples.batterylow;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }

    public void raiseIntent(View view) {

        Intent intent = new Intent();
        String componentName = "com.b2msolutions.elemez/.BatteryLowReceiver";
        intent.setComponent(ComponentName.unflattenFromString(componentName));
        this.sendBroadcast(intent);
    }
}
