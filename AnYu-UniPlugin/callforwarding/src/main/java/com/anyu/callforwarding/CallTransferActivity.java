package com.anyu.callforwarding;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;


public class CallTransferActivity extends AppCompatActivity {

    private static final int REQUEST_CALL_PHONE_PERMISSION = 101;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 请求 CALL_PHONE 权限
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.CALL_PHONE)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.CALL_PHONE},
                    REQUEST_CALL_PHONE_PERMISSION);
        } else {
            // 如果已经有权限，执行呼叫转移
            transferCall();
        }
    }

    @SuppressLint("MissingSuperCall")
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions,
                                           @NonNull int[] grantResults) {
        if (requestCode == REQUEST_CALL_PHONE_PERMISSION) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // 用户授予 CALL_PHONE 权限，执行呼叫转移
                transferCall();
            }
        }
    }

    private void transferCall() {
        // 构造一个呼叫转移的 Intent
        Intent callTransferIntent = new Intent(Intent.ACTION_CALL);
        callTransferIntent.setData(Uri.parse("tel:17333443450"));

        // 启动呼叫转移
        startActivity(callTransferIntent);
    }
}


