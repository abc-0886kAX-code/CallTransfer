package com.anyu.callforwarding.utils;


import com.anyu.callforwarding.constants.HttpStatus;
import com.anyu.callforwarding.exception.ParamsException;

import java.util.HashMap;

/**
 * @Classname AjaxResult
 * @Author TY
 * @Date 2023/9/15 11:24
 * @Description TODO 返回数据包装类
 */
public class AjaxResult extends HashMap<String, Object> {
    private static final long serialVersionUID = 1L;

    public AjaxResult() {
        put("code", 200);
        put("msg", "success");
    }
    public static AjaxResult error() {
        return error(HttpStatus.HTTP_INTERNAL_ERROR, "未知异常，请联系管理员");
    }

    public static AjaxResult error(String msg) {
        return error(HttpStatus.HTTP_INTERNAL_ERROR, msg);
    }

    public static AjaxResult error(ParamsException e) {
        return error(e.getCode(),e.getMessage());
    }
    public static AjaxResult error(Exception e) {
        return error(HttpStatus.HTTP_INTERNAL_ERROR,e.getMessage());
    }

    public static AjaxResult error(int code, String msg) {
        AjaxResult r = new AjaxResult();
        r.put("code", code);
        r.put("msg", msg);
        return r;
    }

    public static AjaxResult ok(int code, Object data) {
        AjaxResult r = new AjaxResult();
        r.put("code", code);
        r.put("data", data);
        return r;
    }
    public static <T> AjaxResult ok(T data) {
        AjaxResult r = new AjaxResult();
        r.put("code", HttpStatus.HTTP_OK);
        r.put("msg", "成功");
        r.put("data", data);
        return r;
    }

    public static AjaxResult ok(String msg) {
        AjaxResult r = new AjaxResult();
        r.put("msg", msg);
        return r;
    }

    public static <T> AjaxResult ok(int code, String msg, T data) {
        AjaxResult r = new AjaxResult();
        r.put("code", code);
        r.put("msg", msg);
        r.put("data", data);
        return r;
    }
    public static AjaxResult ok() {
        return new AjaxResult();
    }

    public AjaxResult put(String key, Object value) {
        super.put(key, value);
        return this;
    }
}
