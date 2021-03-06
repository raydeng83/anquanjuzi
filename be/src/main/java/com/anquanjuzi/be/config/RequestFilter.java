package com.anquanjuzi.be.config;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class RequestFilter implements Filter {

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;

        String origin = request.getHeader("Origin");

        if (origin == null) {
            response.setHeader("Access-Control-Allow-Origin", "http://www.anquanjuzi.com");
        } else
            if (origin.equals("http://www.anquanjuzi.com") || origin.equals("http://admin.anquanjuzi.com"))
        {
            response.setHeader("Access-Control-Allow-Origin", origin);
        }
//        else {
//            response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
//        }

//        response.setHeader("Access-Control-Allow-Origin", "http://www.anquanjuzi.com");
//        response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

        response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Expose-Headers", "Authorization");

        if (!(request.getMethod().equalsIgnoreCase("OPTIONS"))) {
            try {
                chain.doFilter(req, res);
            } catch(Exception e) {
                e.printStackTrace();
            }
        } else {
            System.out.println("Pre-flight");
            response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");

            response.setHeader("Access-Control-Max-Age", "3600");
            response.setHeader("Access-Control-Allow-Headers", "authorization, content-type, x-auth-token, " +
                    "access-control-request-headers,access-control-request-method,accept,origin,authorization,x-requested-with");
            response.setStatus(HttpServletResponse.SC_OK);
        }

    }

    public void init(FilterConfig filterConfig) {}

    public void destroy() {}

}
