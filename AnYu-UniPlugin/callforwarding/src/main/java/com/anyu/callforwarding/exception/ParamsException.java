package com.anyu.callforwarding.exception;




/**
 * @Classname ParamsException
 * @Author TY
 * @Date 2023/8/8 10:41
 * @Description TODO 业务异常
 */
public final class ParamsException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    /**
     * 错误码
     */
    private Integer code = 500;

    /**
     * 错误提示
     */
    private String message = "内部错误";

    /**
     * 空构造方法，避免反序列化问题
     */
    public ParamsException() {
    }

    public ParamsException(String message) {
        this.message = message;
    }
    @Override
    public String getMessage() {
        return message;
    }

    public Integer getCode() {
        return code;
    }
}

