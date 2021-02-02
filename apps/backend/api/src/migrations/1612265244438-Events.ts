import { MigrationInterface, QueryRunner } from 'typeorm';

export class Events1612265244438 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const users = await queryRunner.query(`SELECT id FROM users where username = 'admin'`);
    const userId = users[0] ? users[0].id : 1;
    const images: any[] = await queryRunner.query(`SELECT * FROM medias where src LIKE 'image-%'`);
    const imagesIds = images && images.length ? images.map(image => image.id) : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    await queryRunner.query(`
        INSERT INTO events (body, "start", "end", published, title, place, "ownerId", "imageId")
        VALUES
        ('{"en":"Competition in the fifth round ... Californian raceway.", "ru": "Соревнования в пятом туре сезона ... гоночной трассе."}',
        '2019-07-13 00:00:00.000000', '2019-07-14 00:00:00.000000',
         true, '{"en":"SUPER TROFEO NORTH AMERICA 2019", "ru":"SUPER TROFEO NORTH AMERICA 2019"}',
        '{"en":"ROUND 5: LAGUNA SECA", "ru":"РАУНД 5: ЛАГУНА СЕКА"}', ${userId}, ${imagesIds[0]}),

       ('{"en":"A historic appointment ... famous 24 Hours.", "ru": "Историческое событие для Lamborghini... часами."}',
        '2019-07-26 00:00:00.000000', '2019-07-27 00:00:00.000000',
        true, '{"en":"Super Trofeo Europe 2019", "ru":"Super Trofeo Europe 2019"}',
        '{"en":"Round 4: Spa-Francorchamps", "ru":"Раунд 4: Спа-Франкоршам"}', ${userId}, ${imagesIds[0]}),

       ('{"en":"Elkhart Lake, ... North America.", "ru": "Озеро Элкхарт, ... North America."}',
        '2019-08-03 00:00:00.000000', '2019-08-04 00:00:00.000000',
        true, '{"en":"Super Trofeo North america 2019", "ru":"Super Trofeo North america 2019"}',
        '{"en":"Round 3: Американская дорога", "ru":"Раунд 3: Спа-Франкоршам"}', ${userId}, ${imagesIds[1]}),

       ('{"en":"Following Inje in 2013... the championship.", "ru": "После Inje в 2013 ...для четвертого тура чемпионата."}',
        '2019-08-03 00:00:00.000000', '2019-08-04 00:00:00.000000',
        true, '{"en":"Super Trofeo Asia 2019", "ru":"Super Trofeo Asia 2019"}',
        '{"en":"Round 4: Yeongam", "ru":"Раунд 4: Йонам"}', ${userId}, ${imagesIds[2]}),

       ('{"en":"The Super T...North American series.", "ru": "Super Trofeo North ... североамериканской серии."}',
        '2019-08-24 00:00:00.000000', '2019-08-25 00:00:00.000000',
        true, '{"en":"Super Trofeo North america 2019", "ru":"Super Trofeo North america 2019"}',
        '{"en":"Round 4: Virginia international raceway", "ru":"Раунд 4: Международная гоночная трасса Вирджиния"}',
        ${userId}, ${imagesIds[3]}),

       ('{"en":"The fifth and ... International Circuit.", "ru": "Пятый и последний раунд ... трассе Шанхая."}',
        '2019-08-31 00:00:00.000000', '2019-09-01 00:00:00.000000',
        true, '{"en":"Super Trofeo Asia 2019", "ru":"Super Trofeo Asia 2019"}',
        '{"en":"Round 5: Shanghai", "ru":"Раунд 5: Шанхай"}', ${userId}, ${imagesIds[4]}),

       ('{"en":"The GP Strecke...Europe 2019.", "ru": "GP Strecke принимает ... Europe 2019."}',
        '2019-08-31 00:00:00.000000', '2019-09-01 00:00:00.000000',
        true, '{"en":"Super Trofeo Europe 2019", "ru":"Super Trofeo Europe 2019"}',
        '{"en":"Round 5: Nürburgring", "ru":"Раунд 5: Нюрбургринг"}', ${userId}, ${imagesIds[5]}),

       ('{"en":"Competition in the... Californian raceway.", "ru": "Соревнования в пятом туре ...гоночной трассе."}',
        '2019-09-14 00:00:00.000000', '2019-09-15 00:00:00.000000',
        true, '{"en":"Super Trofeo North America 2019", "ru":"Super Trofeo North America 2019"}',
        '{"en":"Round 5: Laguna Seca", "ru":"Раунд 5: Лагуна Сека"}', ${userId}, ${imagesIds[6]}),

       ('{"en":"NO TAGS",
       "ru": "БЕЗ ТЕГОВ"}',
        '2019-09-19 00:00:00.000000', '2019-09-21 00:00:00.000000', true,
        '{"en":"Lamborghini & design concorso deleganza", "ru":"Lamborghini & дизайнерский конкурс элегантности"}',
        null, ${userId}, ${imagesIds[7]}),

       ('{"en":"For the first time, ... Final 2019.","ru": "Впервые Lamborghini где ...World 2019."}',
        '2019-10-24 00:00:00.000000', '2019-10-25 00:00:00.000000',
        true, '{"en":"Super Trofeo Europe 2019", "ru":"Super Trofeo Europe 2019"}',
        '{"en":"Round 6: Jerez de la Frontera", "ru":"Раунд 6: Херес де ла Фронтера"}', ${userId}, ${imagesIds[8]}),

       ('{"en":"The Lamborghini ... event of the season.", "ru": "Мировой финал события... Lamborghini сезона."}',
        '2019-10-26 00:00:00.000000', '2019-10-27 00:00:00.000000',
        true, '{"en":"Super Trofeo World Final 2019", "ru":"Super Trofeo World Final 2019"}',
        '{"en":"World final: Jerez de la Frontera", "ru":"Мировой финал: Херес де ла Фронтера"}', ${userId},
        ${imagesIds[8]});
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        DELETE
        FROM events
        WHERE "imageId" LIKE 'image-%';
    `);
  }

}
