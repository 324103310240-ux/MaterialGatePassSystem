package com.rinl.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

import com.rinl.util.DBConnection;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {
    	System.out.println("RegisterServlet Running...");

        String employeeId = request.getParameter("employeeId");
        String fullName = request.getParameter("fullName");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String confirmPassword = request.getParameter("confirmPassword");

        if (!password.equals(confirmPassword)) {

            response.getWriter().println("Passwords do not match");
            return;

        }

        try {

            Connection con = DBConnection.getConnection();
            if (con == null) {

                response.getWriter().println("Database Connection Failed");
                return;

            }

            String sql = "INSERT INTO users(full_name,employee_id,email,password,role) VALUES(?,?,?,?,?)";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, fullName);
            ps.setString(2, employeeId);
            ps.setString(3, email);
            ps.setString(4, password);
            ps.setString(5, "INTENDER");

            int result = ps.executeUpdate();

            if(result > 0){

                response.sendRedirect("intender/login.html");

            }else{

                response.getWriter().println("Registration Failed");

            }

            con.close();

        }
        	catch (Exception e) {

        	    e.printStackTrace();

        	    response.setContentType("text/plain");
        	    response.getWriter().println("Registration Error:");
        	    response.getWriter().println(e.getMessage());

        	}

        

        }

    }
