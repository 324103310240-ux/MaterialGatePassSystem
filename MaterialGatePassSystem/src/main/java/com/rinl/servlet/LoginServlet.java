package com.rinl.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.rinl.util.DBConnection;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        try {

            Connection con = DBConnection.getConnection();

            String sql = "SELECT * FROM users WHERE email=? AND password=?";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, email);
            ps.setString(2, password);

            ResultSet rs = ps.executeQuery();

            if(rs.next()){

                String role = rs.getString("role");

                if(role.equalsIgnoreCase("INTENDER")){

                    response.sendRedirect("intender/dashboard.html");

                }
                else if(role.equalsIgnoreCase("APPROVER")){

                    response.sendRedirect("approver/dashboard.html");

                }
                else if(role.equalsIgnoreCase("CISF")){

                    response.sendRedirect("cisf/dashboard.html");

                }

            }else{

                response.getWriter().println("<h2>Invalid Email or Password</h2>");

            }

            con.close();

        }catch(Exception e){

            e.printStackTrace();

        }

    }

}