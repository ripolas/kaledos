import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import static spark.Spark.*;
import static spark.Spark.before;

public class Main {
    public static void main(String[] args) {
        staticFileLocation("public");
        port(8443);
        String keystorePath = "/home/ripolas/Downloads/keystore.jks";
        String filePath = "/home/ripolas/Downloads/password.txt";
        String keystorePassword = "";
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            keystorePassword = br.readLine();
        } catch (IOException ignored) {
        }
        secure(keystorePath, keystorePassword, null, null);
        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        });
    }
}