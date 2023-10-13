package com.anyu.callforwarding.utils;

/**
 * 工具类
 */
public class StringUtils {
    /**
     * 判断是否为空
     * @param cs
     * @return
     */
    public static boolean isBlank(final CharSequence cs) {
        int strLen;
        if (cs == null || (strLen = cs.length()) == 0) {
            return true;
        }
        for (int i = 0; i < strLen; i++) {
            if (!Character.isWhitespace(cs.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    /**
     * 判断是否不为空
     * @param cs
     * @return
     */
    public static boolean isNotBlank(final CharSequence cs) {
       return !isBlank(cs);
    }
}
