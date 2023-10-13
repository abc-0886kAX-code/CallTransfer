package com.anyu.callforwarding.utils;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;

import androidx.core.app.ActivityCompat;

/**
 * 电话权限相关
 */
public class PhonePermissionUtils {
    public static boolean hasPhonePermission(Context context) {
        return ActivityCompat.checkSelfPermission(context, Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED;
    }
}
