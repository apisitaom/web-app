package com.example.demo;

import com.example.demo.entity.*;
import com.example.demo.repository.PositionRepository;
import com.example.demo.repository.RegisterRepository;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	ApplicationRunner init(PositionRepository positionRepository, RegisterRepository registerRepository) {
		return args -> {

			Position position1 = new Position();
			Position position2 = new Position();
			Position position3 = new Position();
			Position position4 = new Position();
			Position position5 = new Position();
			Position position6 = new Position();
			Position position7 = new Position();
			Position position8 = new Position();
			Position position9 = new Position();
			position1.setPosition("พนักงานขาย");
			position2.setPosition("วิศวะกร");
			position3.setPosition("IT-Support");
			position4.setPosition("เเม่บ้าน");
			position5.setPosition("ยาม");
			position6.setPosition("ECO");
			position7.setPosition("นักวิจัย");
			position8.setPosition("ขับรถ");
			position9.setPosition("บัญชี");
			positionRepository.save(position1);
			positionRepository.save(position2);
			positionRepository.save(position3);
			positionRepository.save(position4);
			positionRepository.save(position5);
			positionRepository.save(position6);
			positionRepository.save(position7);
			positionRepository.save(position8);

			// ================================================= SET REGISTER
			// =================================================
			Register register1 = new Register();
			register1.setFirstName("Apisit");
			register1.setLastName("Prompha");
			register1.setAddress("Suranaree University");
			register1.setNatoinality("Thai");
			register1.setSalary(25000);
			register1.setPhoneNumber(933347977);
			registerRepository.save(register1);

			Register register2 = new Register();
			register2.setFirstName("Pachan");
			register2.setLastName("Prompha");
			register2.setAddress("Atta Hotel");
			register2.setNatoinality("Thai-English");
			register2.setSalary(40000);
			register2.setPhoneNumber(878766278);
			registerRepository.save(register2);

			Register register3 = new Register();
			register3.setFirstName("Adison");
			register3.setLastName("Prompha");
			register3.setAddress("Kirimaya Hotel");
			register3.setNatoinality("japanes");
			register3.setSalary(12000);
			register3.setPhoneNumber(821520247);
			registerRepository.save(register3);

			System.out.println(register1);
			System.out.println();
			System.out.println(register2);
			System.out.println();
			System.out.println(register3);
			System.out.println();

		};
	}
}
