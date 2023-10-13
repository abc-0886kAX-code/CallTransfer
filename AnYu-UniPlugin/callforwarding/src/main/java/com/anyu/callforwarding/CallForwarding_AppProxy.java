package com.anyu.callforwarding;

import android.Manifest;
import android.app.Activity;
import android.app.Application;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;

import androidx.core.app.ActivityCompat;

import io.dcloud.feature.uniapp.UniAppHookProxy;

public class CallForwarding_AppProxy implements UniAppHookProxy {
    @Override
    public void onSubProcessCreate(Application application) {

    }

    //可写初始化触发逻辑
    @Override
    public void onCreate(Application application) {

        Context context = application.getApplicationContext();

        /**
         * 检查权限
         */
        boolean b = ActivityCompat.checkSelfPermission(context, Manifest.permission.CALL_PHONE) == PackageManager.PERMISSION_GRANTED;

        if(!b){
            ActivityCompat.requestPermissions((Activity) context, new String[]{Manifest.permission.CALL_PHONE}, 0);
        }
        /**
         * 获取默认拨号应用权限
         */
        isDefaultDialerApp(context);

    }

    /**
     * 获取权限
     * @param context
     * @return
     */
    public  boolean isDefaultDialerApp(Context context) {
        ComponentName componentName = null; // 替换为您的 CallScreeningService 的组件名
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
            componentName = new ComponentName(context, CallForwardingService.class);
        }
        Intent intent = new Intent(Intent.ACTION_DIAL);
        intent.setComponent(componentName);
        ResolveInfo resolveInfo = context.getPackageManager().resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY);
        return resolveInfo != null && resolveInfo.activityInfo.packageName.equals(context.getPackageName());

    }
}
