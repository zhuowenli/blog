/*
 * @Author: 卓文理
 * @Email : 531840344@qq.com
 * @Desc  : Migrations
 */
'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('posts', table => {
        table.increments().primary();

        table.string('title', 255).notNull().comment('文章标题');
        table.mediumtext('content').comment('文章内容');
        table.mediumtext('excerpt').comment('文章简介');
        table.integer('priority').defaultTo(0).notNull().comment('权重');
        table.integer('status').defaultTo(0).notNull().comment('文章状态');
        table.integer('user_id').defaultTo(1).notNull().unsigned().comment('用户id');
        table.integer('category_id').defaultTo(1).notNull().unsigned().comment('分类id');
        table.integer('like_count').unsigned().comment('喜欢数');
        table.integer('view_count').unsigned().comment('浏览数');

        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('posts');
};
