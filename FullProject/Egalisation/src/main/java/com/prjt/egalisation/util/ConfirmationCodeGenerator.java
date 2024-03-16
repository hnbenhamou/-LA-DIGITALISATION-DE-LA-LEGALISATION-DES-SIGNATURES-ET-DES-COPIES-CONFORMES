package com.prjt.egalisation.util;

import java.security.SecureRandom;
import java.math.BigInteger;

public class ConfirmationCodeGenerator {
    private static final int CONFIRMATION_CODE_LENGTH = 8; // Set the desired length of the confirmation code

    public static String generateConfirmationCode() {
        SecureRandom random = new SecureRandom();
        return new BigInteger(CONFIRMATION_CODE_LENGTH * 5, random).toString(32).substring(0, CONFIRMATION_CODE_LENGTH);
    }
}

