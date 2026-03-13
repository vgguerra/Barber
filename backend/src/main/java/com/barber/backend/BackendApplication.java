package com.barber.backend;

// Classe responsável por iniciar a aplicação Spring Boot
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

/*
 * @SpringBootApplication é uma anotação composta que inclui:
 * - @Configuration → permite definir configurações do Spring
 * - @EnableAutoConfiguration → o Spring configura automaticamente vários componentes
 * - @ComponentScan → procura classes anotadas (controllers, services, etc)
 */
@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {

		/*
		 * Carrega o arquivo .env localizado na raiz do projeto.
		 *
		 * Esse arquivo geralmente contém informações sensíveis como:
		 * - URL do banco
		 * - usuário do banco
		 * - senha do banco
		 *
		 * Exemplo de .env:
		 *
		 * DB_URL=jdbc:postgresql://db.xxxxxx.supabase.co:5432/postgres
		 * DB_USER=postgres
		 * DB_PASSWORD=minha_senha
		 */
		Dotenv dotenv = Dotenv.load();

		/*
		 * Define variáveis de sistema para que o Spring Boot consiga acessá-las.
		 *
		 * No application.properties usamos ${DB_URL}, ${DB_USER} e ${DB_PASSWORD}.
		 *
		 * Quando o Spring inicia, ele lê essas propriedades do ambiente do sistema.
		 */
		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USER", dotenv.get("DB_USER"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));

		/*
		 * Inicializa a aplicação Spring Boot.
		 *
		 * O Spring irá:
		 * 1. iniciar o servidor embutido (Tomcat)
		 * 2. configurar os beans automaticamente
		 * 3. conectar ao banco de dados
		 * 4. iniciar a API REST
		 */
		SpringApplication.run(BackendApplication.class, args);
	}

}