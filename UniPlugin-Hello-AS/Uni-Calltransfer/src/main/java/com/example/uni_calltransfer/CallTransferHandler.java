package com.example.uni_calltransfer;


import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import io.dcloud.feature.uniapp.common.UniModule;

public class CallTransferHandler extends UniModule {
    private Context context;

    public CallTransferHandler(Context context) {
        this.context = context;
    }

    // 执行呼叫转移
    public void setCallTransfer(String code, String phoneNumber) {
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
    }
}