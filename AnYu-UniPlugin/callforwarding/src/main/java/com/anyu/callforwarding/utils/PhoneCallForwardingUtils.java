package com.anyu.callforwarding.utils;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;

import com.alibaba.fastjson.JSONObject;
import com.anyu.callforwarding.Enums.CallForwardingEnum;
import com.anyu.callforwarding.Enums.ForwardTypeEnum;
import com.anyu.callforwarding.exception.ParamsException;

public class PhoneCallForwardingUtils {
    public static final String PhoneKey = "11EDA8506DD24C20B161049547FF29E1";

    /**
     * 设置呼叫转移的号码 识别key使用PhoneKey +卡槽
     * @param context
     * @param object
     * @return
     */
    public static void setCallPhone(Context context,JSONObject object){
        /**
         * 电话号码
         */
        String phone = object.getString("phone");
        /**
         * 卡槽
         */
        String icmSlot = object.getString("icmslot");
        /**
         * 运营商
         */
        String operator = object.getString("operator");
        if(StringUtils.isBlank(phone)){
            throw new ParamsException("电话不能为空!");
        }
        if(StringUtils.isBlank(icmSlot)){
            throw new ParamsException("卡槽不能为空!");
        }
        if(StringUtils.isBlank(operator)){
            throw new ParamsException("运营商不能为空!");
        }
        DataUtils.setObjSaveData(context,PhoneKey+icmSlot,object);
    }

    /**
     * 移除电话信息
     * @param context
     * @return
     */
    public static void removeCallPhone(Context context,JSONObject object){
        /**
         * 卡槽
         */
        String icmSlot = object.getString("icmslot");
        DataUtils.removeData(context,PhoneKey+icmSlot);
    }

    /**
     * 开始某个卡槽的呼叫转移
     * @param context
     * @return
     */
    public static void startCallForwarding(Context context,JSONObject object){
        String forwardType = object.getString("forwardtype");
        String icmSlot = object.getString("icmslot");
        if(StringUtils.isBlank(icmSlot)){
            throw new ParamsException("卡槽不能为空!");
        }
        if(StringUtils.isBlank(forwardType)){
            throw new ParamsException("呼叫转移类型不能为空!");
        }
        /**
         * 获取电话等相关信息
         */
        JSONObject phoneObj = DataUtils.getObjSaveData(context,PhoneKey+icmSlot);
        if(phoneObj != null && !phoneObj.isEmpty()){
            /**
             * 获取运营商类型
             */
            String operator = object.getString("operator");
            /**
             * 电话
             */
            String phone = object.getString("phone");

            CallForwardingEnum callForwardingEnum = CallForwardingEnum.getCallForwardingEnum(operator);
            Intent intentCallForward = new Intent(Intent.ACTION_CALL); // ACTION_CALL
            Uri uri2 = null;

            switch (ForwardTypeEnum.getForwardTypeEnum(forwardType)){
                /**
                 * 无条件
                 */
                case UNCONDITIONAL:
                    uri2 = Uri.parse(callForwardingEnum.getUnconditionalForward(phone));
                    break;
                case BUSY:
                    uri2 = Uri.parse(callForwardingEnum.getBusyForward(phone));
                    break;
                case SHUTDOWN:
                    uri2 = Uri.parse(callForwardingEnum.getShutdownForward(phone));
                    break;
                default:
                    throw new ParamsException("没有匹配的值！");
            }
            intentCallForward.setData(uri2);
            /**
             * 设置卡槽
             */
            intentCallForward.putExtra("com.android.phone.extra.slot", icmSlot); // 设置卡槽为0，表示卡1
            context.startActivity(intentCallForward);
        }
    }

    /**
     * 取消呼叫转移
     * @param context
     * @param object
     */
    public static void stopCallForwarding(Context context,JSONObject object){
        String forwardType = object.getString("forwardtype");
        String icmslot = object.getString("icmslot");
        if(StringUtils.isBlank(icmslot)){
            throw new ParamsException("卡槽不能为空!");
        }
        if(StringUtils.isBlank(forwardType)){
            throw new ParamsException("呼叫转移类型不能为空!");
        }
        /**
         * 获取电话等相关信息
         */
        JSONObject phoneObj = DataUtils.getObjSaveData(context,PhoneKey+icmslot);
        if(phoneObj != null && !phoneObj.isEmpty()){
            /**
             * 获取运营商类型
             */
            String operator = object.getString("operator");
            /**
             * 卡槽
             */
            String icmSlot = object.getString("icmslot");
            CallForwardingEnum callForwardingEnum = CallForwardingEnum.getCallForwardingEnum(operator);
            Intent intentCallForward = new Intent(Intent.ACTION_CALL); // ACTION_CALL
            Uri uri2 = null;

            switch (ForwardTypeEnum.getForwardTypeEnum(forwardType)){
                /**
                 * 无条件
                 */
                case UNCONDITIONAL:
                    uri2 = Uri.parse(callForwardingEnum.getCancelUnconditionalForward());
                    break;
                case BUSY:
                    uri2 = Uri.parse(callForwardingEnum.getCancelBusyForward());
                    break;
                case SHUTDOWN:
                    uri2 = Uri.parse(callForwardingEnum.getCancelShutdownForward());
                    break;
                default:
                    uri2 = Uri.parse(callForwardingEnum.getCancelAllForward());
            }
            intentCallForward.setData(uri2);
            /**
             * 设置卡槽
             */
            intentCallForward.putExtra("com.android.phone.extra.slot", icmSlot); // 设置卡槽为0，表示卡1
            context.startActivity(intentCallForward);
        }
    }

}
