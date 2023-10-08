package com.example.uni_calltransfer;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.telephony.TelephonyManager;
import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Build;
import androidx.core.app.ActivityCompat;
import io.dcloud.feature.uniapp.common.UniModule;

public class CallTransferHandler extends UniModule {
    private Context context;
    private TelephonyManager telephonyManager;

    public CallTransferHandler(Context context) {
        this.context = context;
        telephonyManager = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
    }

    // 检查电话权限
    private boolean hasPhonePermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            return ActivityCompat.checkSelfPermission(context, Manifest.permission.CALL_PHONE) == PackageManager.PERMISSION_GRANTED;
        }
        return true;
    }

    // 执行呼叫转移
    public void setCallTransfer(String code, String phoneNumber) {
        if (hasPhonePermission()) {
            String hash = Uri.encode("#");
            String callForwardString = code + phoneNumber + hash;

            Intent intent = new Intent(Intent.ACTION_CALL);
            Uri uri = Uri.fromParts("tel", callForwardString, "#");
            intent.setData(uri);

            try {
                context.startActivity(intent);
            } catch (SecurityException e) {
                e.printStackTrace();
            }
        } else {
            // 请求电话权限
            ActivityCompat.requestPermissions((Activity) context, new String[]{Manifest.permission.CALL_PHONE}, 0);
        }
    }
}