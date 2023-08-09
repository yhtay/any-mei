<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class animeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('animes')->insert(
            [[
                "name" => "Naruto",
                "description" => "Naruto Uzumaki, a young ninja with a dream of becoming the strongest ninja and the leader of his village, navigates the challenges of life as a shinobi while seeking acceptance from those around him.",
                "release_date" => "October 3, 2002",
                "rating" => 8.2,
                "episodes" => 220
            ],
            [
                "name" => "One Piece",
                "description" => "Monkey D. Luffy and his pirate crew set sail in search of the ultimate treasure known as One Piece, navigating through the treacherous Grand Line and facing powerful foes.",
                "release_date" => "October 20, 1999",
                "rating" => 8.7,
                "episodes" => 1000
            ],
            [
                "name" => "Attack on Titan",
                "description" => "In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, Eren Yeager joins the military to eradicate the Titans after they breach the outer wall.",
                "release_date" => "April 7, 2013",
                "rating" => 9.0,
                "episodes" => 75
            ],
            [
                "name" => "Fullmetal Alchemist: Brotherhood",
                "description" => "Brothers Edward and Alphonse Elric use alchemy in their quest to find the Philosopher's Stone, which could restore their bodies after a failed attempt to bring their mother back to life.",
                "release_date" => "April 5, 2009",
                "rating" => 9.1,
                "episodes" => 64
            ],
            [
                "name" => "Dragon Ball Z",
                "description" => "Goku and his friends protect Earth from powerful foes, face challenging villains, and strive to become stronger through intense battles and training.",
                "release_date" => "April 26, 1989",
                "rating" => 8.7,
                "episodes" => 291
            ],
            [
                "name" => "Death Note",
                "description" => "Light Yagami, a high school student, gains the power to kill anyone by writing their name in a mysterious notebook, leading to a cat-and-mouse game with the genius detective L.",
                "release_date" => "October 4, 2006",
                "rating" => 9.0,
                "episodes" => 37
            ],
            [
                "name" => "Sword Art Online",
                "description" => "Players of a virtual reality MMORPG find themselves trapped inside the game, and their only way out is to complete all the levels while risking real-life consequences.",
                "release_date" => "July 8, 2012",
                "rating" => 7.6,
                "episodes" => 96
            ],
            [
                "name" => "My Hero Academia",
                "description" => "Izuku Midoriya, born without superpowers in a world where they are common, inherits a powerful ability from the world's greatest hero and enrolls in a prestigious hero academy.",
                "release_date" => "April 3, 2016",
                "rating" => 8.4,
                "episodes" => 113
            ],
            [
                "name" => "Hunter x Hunter",
                "description" => "Gon Freecss sets out to become a Hunter to find his father and experience the thrill of exploration, friendship, and danger in the world of Hunters and monsters.",
                "release_date" => "October 2, 2011",
                "rating" => 9.1,
                "episodes" => 148
            ],
            [
                "name" => "Tokyo Ghoul",
                "description" => "After an encounter with a ghoul, Kaneki Ken becomes half-ghoul and must navigate between the human and ghoul world, facing the challenges of his new identity.",
                "release_date" => "July 4, 2014",
                "rating" => 7.8,
                "episodes" => 48
            ],
            [
                "name" => "Fairy Tail",
                "description" => "Natsu Dragneel and his friends form a wizard guild called Fairy Tail, taking on various missions while dealing with their own personal challenges and battles.",
                "release_date" => "October 12, 2009",
                "rating" => 8.1,
                "episodes" => 328
            ],
            [
                "name" => "Bleach",
                "description" => "Ichigo Kurosaki gains the powers of a Soul Reaper, tasked with defending humans from evil spirits and guiding departed souls to the afterlife.",
                "release_date" => "October 5, 2004",
                "rating" => 8.1,
                "episodes" => 366
            ],
            [
                "name" => "Steins;Gate",
                "description" => "Rintarou Okabe and his friends accidentally create a device that can send messages to the past, leading to a series of time-traveling adventures and consequences.",
                "release_date" => "April 6, 2011",
                "rating" => 9.0,
                "episodes" => 24
            ],
            [
                "name" => "One Punch Man",
                "description" => "Saitama, a hero capable of defeating any opponent with a single punch, seeks a worthy adversary while dealing with the boredom of his overwhelming power.",
                "release_date" => "October 5, 2015",
                "rating" => 8.8,
                "episodes" => 24
            ],
            [
                "name" => "Dragon Ball Super",
                "description" => "Goku and his friends face even stronger foes from different universes as they participate in the Tournament of Power, aiming to protect their universe from destruction.",
                "release_date" => "July 5, 2015",
                "rating" => 8.3,
                "episodes" => 131
            ],
            [
                "name" => "Demon Slayer: Kimetsu no Yaiba",
                "description" => "Tanjiro Kamado seeks revenge against demons after they massacre his family and turn his sister Nezuko into a demon.",
                "release_date" => "April 6, 2019",
                "rating" => 8.7,
                "episodes" => 26
            ],
            [
                "name" => "Cowboy Bebop",
                "description" => "A group of bounty hunters, led by Spike Spiegel, travels through space in the spaceship Bebop, taking on dangerous criminals and dealing with their haunted pasts.",
                "release_date" => "April 3, 1998",
                "rating" => 8.9,
                "episodes" => 26
            ],
            [
                "name" => "Neon Genesis Evangelion",
                "description" => "Shinji Ikari pilots a giant mecha to protect Earth from mysterious beings known as Angels while dealing with complex interpersonal relationships.",
                "release_date" => "October 4, 1995",
                "rating" => 8.5,
                "episodes" => 26
            ],
            [
                "name" => "Naruto: Shippuden",
                "description" => "The continuation of Naruto's journey as he embarks on a quest to save his friend Sasuke and protect the world from impending danger.",
                "release_date" => "February 15, 2007",
                "rating" => 8.6,
                "episodes" => 500
            ],
            [
                "name" => "No Game No Life",
                "description" => "Siblings Sora and Shiro, genius gamers known as Blank, are transported to a world where all conflicts are resolved through games.",
                "release_date" => "April 9, 2014",
                "rating" => 7.9,
                "episodes" => 12
            ],
            [
                "name" => "The Promised Neverland",
                "description" => "Emma and her friends discover the dark truth behind the orphanage they live in and plan an escape to save themselves and other children from a horrifying fate.",
                "release_date" => "January 9, 2019",
                "rating" => 8.7,
                "episodes" => 24
            ],
            [
                "name" => "Mob Psycho 100",
                "description" => "Shigeo Kageyama, also known as Mob, possesses powerful psychic abilities and must learn to control them while navigating the challenges of adolescence.",
                "release_date" => "July 12, 2016",
                "rating" => 8.5,
                "episodes" => 25
            ],
            [
                "name" => "Black Clover",
                "description" => "Asta, a boy born without magic in a world where magic is everything, aims to become the Wizard King and prove his worth through determination and hard work.",
                "release_date" => "October 3, 2017",
                "rating" => 7.2,
                "episodes" => 170
            ],
            [
                "name" => "Vinland Saga",
                "description" => "Thorfinn, a young Viking warrior, seeks revenge against the man who killed his father and explores the concepts of honor, war, and violence.",
                "release_date" => "July 7, 2019",
                "rating" => 8.8,
                "episodes" => 24
            ],
            [
                "name" => "Re:Zero - Starting Life in Another World",
                "description" => "Subaru Natsuki is transported to a fantasy world and discovers he has the ability to rewind time after death, leading to a series of life-and-death challenges.",
                "release_date" => "April 4, 2016",
                "rating" => 8.1,
                "episodes" => 50
            ],
            [
                "name" => "Haikyuu!!",
                "description" => "Shoyo Hinata joins the volleyball team to pursue his dream of becoming a great player and compete against his rival, Tobio Kageyama.",
                "release_date" => "April 6, 2014",
                "rating" => 8.7,
                "episodes" => 85
            ],
            [
                "name" => "JoJo's Bizarre Adventure",
                "description" => "The multi-generational adventures of the Joestar family, each with their unique abilities, as they confront powerful foes and supernatural forces.",
                "release_date" => "October 6, 2012",
                "rating" => 8.4,
                "episodes" => 152
            ],
            [
                "name" => "Gintama",
                "description" => "In an alternate-history Edo period, Gintoki Sakata and his eccentric friends take on odd jobs to pay the rent while dealing with the arrival of powerful aliens.",
                "release_date" => "April 4, 2006",
                "rating" => 9.0,
                "episodes" => 367
            ],
            [
                "name" => "Your Lie in April",
                "description" => "Kousei Arima, a piano prodigy who lost his ability to hear the sound of the piano, rediscovers music and love through a free-spirited violinist named Kaori Miyazono.",
                "release_date" => "October 10, 2014",
                "rating" => 8.7,
                "episodes" => 22
            ],
            [
                "name" => "Assassination Classroom",
                "description" => "A class of students must assassinate their octopus-like teacher, Koro-sensei, before he destroys Earth, but they also learn valuable life lessons from him.",
                "release_date" => "January 9, 2015",
                "rating" => 8.0,
                "episodes" => 47
            ],
            [
                "name" => "Parasyte -the maxim-",
                "description" => "Shinichi Izumi battles against deadly parasitic creatures that infest human hosts, and he forms a reluctant symbiotic relationship with one of them.",
                "release_date" => "October 9, 2014",
                "rating" => 8.5,
                "episodes" => 24
            ],
            [
                "name" => "Clannad",
                "description" => "Tomoya Okazaki befriends various girls in high school, helping them overcome their personal struggles while facing his own challenges.",
                "release_date" => "October 4, 2007",
                "rating" => 8.2,
                "episodes" => 23
            ],
            [
                "name" => "Magi: The Labyrinth of Magic",
                "description" => "Aladdin, Alibaba, and Morgiana embark on a journey to explore dungeons, uncover secrets, and change the world using the power of magic and friendship.",
                "release_date" => "October 7, 2012",
                "rating" => 8.0,
                "episodes" => 50
            ],
            [
                "name" => "Attack on Titan: The Final Season",
                "description" => "The concluding part of the Attack on Titan series, focusing on the final battle between humanity and the Titans.",
                "release_date" => "December 7, 2020",
                "rating" => 9.2,
                "episodes" => 16
            ],
            [
                "name" => "Fire Force",
                "description" => "Shinra Kusakabe joins Special Fire Force Company 8 to stop Infernals, beings spontaneously combusting and causing havoc, while uncovering the truth behind his family's death.",
                "release_date" => "July 6, 2019",
                "rating" => 7.7,
                "episodes" => 48
            ]]);
    }
}
