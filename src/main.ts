import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const options = new DocumentBuilder()
    .setTitle("project")
    .setDescription("project description")
    .setVersion("1.0")
    .addTag("project")
    .addSecurity("basic", {
      type: "http",
      scheme: "basic",
    })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);
}
bootstrap();
