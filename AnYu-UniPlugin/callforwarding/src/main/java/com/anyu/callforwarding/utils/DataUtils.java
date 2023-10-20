package com.anyu.callforwarding.utils;

import android.content.Context;
import android.content.SharedPreferences;

import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.dom.binding.JSONUtils;

import java.util.Locale;
import java.util.UUID;

/**
 * SharedPreferences 用于持久性地存储和管理键值对数据
 * 通常用于存储简单的设置、配置值或需要在应用关闭或设备重启后保留的少量数据
 */
public class DataUtils {
    public final static String dataSharedPreferences = "call1C22C042EF404BF88749505261983EEBForwarding";
    /**
     * 持久化存储数据,保存String类型的数据
     * @param context
     * @param key
     * @param data
     */
    public static void setStrSaveData(Context context,String key,String data){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        editor.putString(key,data);
        editor.apply();
    }

    /**
     * 持久化存储数据,保存JSONObject类型的数据
     * @param context
     * @param key
     * @param jsonObject
     */
    public static void setObjSaveData(Context context, String key, JSONObject jsonObject){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        editor.putString(key,jsonObject.toJSONString());
        editor.apply();
    }

    /**
     * 获取保存的持久化存储数据
     * @param context
     * @param key
     * @param defaultValue
     */
    public static String getStrSaveData(Context context,String key,String defaultValue){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        return sp.getString(key, defaultValue);
    }

    /**
     * 获取保存的持久化存储数据
     * @param context
     * @param key
     * @return
     */
    public static String getStrSaveData(Context context,String key){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        return sp.getString(key, null);
    }

    /**
     * 获取JSONObject的持久化存储数据
     * @param context
     * @param key
     * @param object
     * @return
     */
    public static JSONObject getObjSaveData(Context context,String key,JSONObject object){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        String json = sp.getString(key,null);
        if(JSONUtils.isJSON(json)){
            return JSONObject.parseObject(json);
        }else {
            return object;
        }
    }

    /**
     * 获取JSONObject的持久化存储数据
     * @param context
     * @param key
     * @return
     */
    public static JSONObject getObjSaveData(Context context,String key){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        String json = sp.getString(key,null);
        if(JSONUtils.isJSON(json)){
            return JSONObject.parseObject(json);
        }else {
            return new JSONObject();
        }
    }

    /**
     * 设置布尔类型的值
     * @param context
     * @param key
     * @param b
     */
    public static void setBooleanSaveData(Context context,String key, Boolean b){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        editor.putBoolean(key,b);
        editor.apply();
    }

    /**
     * 获取保存的布尔类型的值
     * @param context
     * @param key
     * @param defaultValue
     * @return
     */
    public static Boolean getBooleanSaveData(Context context,String key, Boolean defaultValue){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        return sp.getBoolean(key,defaultValue);
    }

    /**
     * 获取保存的布尔类型的值
     * @param context
     * @param key
     * @return
     */
    public static Boolean getBooleanSaveData(Context context,String key){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        return sp.getBoolean(key,false);
    }

    /**
     * 保存Int类型的值
     * @param context
     * @param key
     * @param integer
     */
    public static void setIntSaveData(Context context,String key, Integer integer){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        editor.putInt(key,integer);
        editor.apply();
    }

    /**
     * 获取保存Int类型的值
     * @param context
     * @param key
     * @param defaultValue
     * @return
     */
    public static Integer getIntSaveData(Context context,String key,Integer defaultValue) {
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        return sp.getInt(key,defaultValue);
    }

    /**
     * 获取保存Int类型的值，默认为0
     * @param context
     * @param key
     * @return
     */
    public static Integer getIntSaveData(Context context,String key) {
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        return sp.getInt(key,0);
    }

    /**
     * 删除数据
     * @param context
     * @param key
     * @return
     */
    public static Boolean removeData(Context context,String key){
        SharedPreferences sp = context.getSharedPreferences(dataSharedPreferences, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        editor.remove(key);
        return editor.commit();
    }

}
