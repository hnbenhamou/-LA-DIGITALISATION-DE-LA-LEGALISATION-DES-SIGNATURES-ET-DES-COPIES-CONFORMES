package com.prjt.egalisation.config;



import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
public class configuration implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/documents/demande/**") 
                .addResourceLocations("classpath:/demande/"); // 

        registry
                .addResourceHandler("/documents/egalise/**") 
                .addResourceLocations("classpath:/egalise/");
        registry
                .addResourceHandler("/documents/signature/**")
                .addResourceLocations("classpath:/signature/");
        registry
                .addResourceHandler("/documents/demande_copie/**")
                .addResourceLocations("classpath:/demande_copie/");
    }
}
