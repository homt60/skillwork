document.querySelector('#button').onclick = function() {
    
    var gender;
    const personGenerator = {
        surnameJson: `{  
            "count": 16,
            "list": {
                "id_1": "Иванов",
                "id_2": "Смирнов",
                "id_3": "Кузнецов",
                "id_4": "Васильев",
                "id_5": "Петров",
                "id_6": "Михайлов",
                "id_7": "Новиков",
                "id_8": "Федоров",
                "id_9": "Кравцов",
                "id_10": "Николаев",
                "id_11": "Семёнов",
                "id_12": "Славин",
                "id_13": "Степанов",
                "id_14": "Павлов",
                "id_15": "Александров",
                "id_16": "Морозов"
            }
        }`,

        thirdNameJson: `{  
            "count": 16,
            "list": {
                "id_1": "Негодяев",
                "id_2": "Львов",
                "id_3": "Шишкин",
                "id_4": "Юмашев",
                "id_5": "Сабуров",
                "id_6": "Карасев",
                "id_7": "Карпов",
                "id_8": "Кондаков",
                "id_9": "Кравцов",
                "id_10": "Козлов",
                "id_11": "Хугаев",
                "id_12": "Волков",
                "id_13": "Зайцев",
                "id_14": "Шишов",
                "id_15": "Теплов",
                "id_16": "Морозов"
            }
        }`,
        
        Month: `{  
            "count": 12,
            "list": {
                "id_1": ["Января",31],
                "id_2": ["Февраля",28],
                "id_3": ["Марта",31],
                "id_4": ["Апреля",30],
                "id_5": ["Мая",31],
                "id_6": ["Июня",30],
                "id_7": ["Июля",31],
                "id_8": ["Августа",31],
                "id_9": ["Сентября",30],
                "id_10": ["Октября",31],
                "id_11": ["Ноября",30],
                "id_12": ["Декабря",31]
            }
        }`,

        firstNameMaleJson: `{
            "count": 10,
            "list": {     
                "id_1": "Александр",
                "id_2": "Максим",
                "id_3": "Иван",
                "id_4": "Артем",
                "id_5": "Дмитрий",
                "id_6": "Никита",
                "id_7": "Михаил",
                "id_8": "Даниил",
                "id_9": "Егор",
                "id_10": "Андрей"
            }
        }`,

        firstNameFemaleJson: `{
            "count": 10,
            "list": {     
                "id_1": "Анна",
                "id_2": "Ника",
                "id_3": "Агапия",
                "id_4": "Аза",
                "id_5": "Аида",
                "id_6": "Аля",
                "id_7": "Алина",
                "id_8": "Ая",
                "id_9": "Афина",
                "id_10": "Асия"
            }
        }`,
        
        jobsJson: `{
            "count": 10,
            "list": {     
                "id_1": "Артист",
                "id_2": "Актер",
                "id_3": "Адвокат",
                "id_4": "Экономист",
                "id_5": "Эколог",
                "id_6": "Юрист",
                "id_7": "Трейдер",
                "id_8": "Учитель",
                "id_9": "Физик",
                "id_10": "Хирург"
            }
        }`,


        GENDER_MALE: 'Мужчина',
        GENDER_FEMALE: 'Женщина',
        GENDER_HELICOPTER: 'Идентифицирует себя как боевой вертолёт "Апач"',
        
        randomIntNumber: function (max=10,min=1){
            return Math.floor(Math.random() * (max - min) + min)

            },

        randomValue: function (json) {
            const obj = JSON.parse(json);

            const prop = `id_` + this.randomIntNumber(obj.count,1);
          
            return obj.list[prop];
        },

        randomGender: function() {
            
            Math.random() < 0.5 ? gender = this.GENDER_FEMALE: gender = this.GENDER_MALE;


            return gender;
        },

        randomFirstName: function() {
            
            if (gender == this.GENDER_MALE){
                return this.randomValue(this.firstNameMaleJson);
            }
            else if (gender == this.GENDER_FEMALE){
                return this.randomValue(this.firstNameFemaleJson);
            }
            
        },

        randomJobs: function() {    
        return this.randomValue(this.jobsJson);
            
        },


        randomSurname: function() {

            if (gender == this.GENDER_FEMALE){
               
                return this.randomValue(this.surnameJson) + "а";
            }
            else if (gender == this.GENDER_MALE){
               
                return this.randomValue(this.surnameJson);
            }
            

        },

        randomThirdName: function() {

            if (gender == this.GENDER_FEMALE){
               
                return this.randomValue(this.thirdNameJson) + "а";
            }
            else if (gender == this.GENDER_MALE){
               
                return this.randomValue(this.thirdNameJson);
            }
            

        },

        randomAge: function() {
            var year = this.randomIntNumber(2022,1900);
            var n = this.randomValue(this.Month);
            var month = n[0];
            var day = this.randomIntNumber(n[1])
            return year+ " года " + day + " " + month;


        },

        getPerson: function () {
            this.person = {};
            this.person.gender = this.randomGender();
            this.person.firstName = this.randomFirstName();
            this.person.surname = this.randomSurname();
            this.person.randomAge = this.randomAge();
            this.person.randomJob = this.randomJobs();
            this.person.randomThirdName = this.randomThirdName();
            
            return this.person;
        }
    };



    const initPerson = personGenerator.getPerson();
    document.getElementById('NameOutput').innerText = initPerson.surname+" "+initPerson.firstName+" "+initPerson.randomThirdName;

    document.getElementById('birthYearOutput').innerText = initPerson.randomAge;

    document.getElementById('genderOutput').innerText = initPerson.gender;
    
    document.getElementById("job").innerText = initPerson.randomJob;

        

  }



