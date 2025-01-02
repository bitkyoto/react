import React from 'react'
import Header from '../components/Header'
import './About.css'
export default function About() {
  return (
    <>
      <Header/>
      <div className="about_container">  
        <h1 className='title_1'> Добро пожаловать на Soul: Форум для Киноманов! </h1>
        <div className="bio">
          <h2> Что такое Soul? </h2>
            <p className='bio_p'> 
              Soul — это уникальное сообщество, созданное для всех, кто страстно увлечен миром кино. 
              Здесь вы найдете единомышленников, с которыми можно обсудить любимые фильмы, делиться впечатлениями и 
              открывать для себя новые шедевры кинематографа. 
            </p>
          <h2>Наша миссия</h2>
            <p className='bio_p'>
              Наша миссия — создать пространство, где каждый киноман сможет найти свое место. 
              Мы стремимся объединить людей, которые любят кино, и предоставить им платформу для обмена мнениями, знаниями и эмоциями.
            </p>
          <h2>Как начать?</h2>
            <ol>
              <li><strong>Регистрация </strong>: Создайте учетную запись, чтобы получить доступ ко всем функциям форума.</li>
              <li><strong>Представление </strong>: Расскажите о себе в разделе "Приветствие" и познакомьтесь с другими участниками.</li>
              <li><strong>Участие в обсуждениях </strong>: Присоединяйтесь к существующим обсуждениям или создавайте свои темы.</li>
              <li><strong>Делитесь контентом </strong>: Пишите посты, делитесь ссылками на интересные статьи и видео, загружайте изображения и многое другое.</li>
            </ol>
        </div>

      </div>
    </>
  )
}