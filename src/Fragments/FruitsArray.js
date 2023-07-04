import apple from '../images/main_apples.webp';
import cherry from '../images/cherries-main.jpg';
import watermelon from '../images/watermelon-main-finalPlK6Fh.jpg';
import mangoes from '../images/mango-main1296x728-header.webp';
import papaya from '../images/papaya-main.jpg';
import pineapple from '../images/pineapple-main.jpg';



const FruitsArray = {
    apple: {
        heading: 'Apple',
        img: apple,
        description: 'Apples are rich in fiber, vitamins, and minerals, all of which benefit human health. They also provideTrusted Source an array of antioxidants. These substances helpTrusted Source neutralize free radicals.',
        benefits: [
            'Improve mental health',
            'Reduce the risk of stroke',
            'Lower cholesterol',
            'Boost heart health',
            'Lower the risk of diabetes',
            'Lower the risk of cancer',
            'Help maintain a moderate weight'
        ],
        nutritionDescription: 'Here are the nutrition facts for one raw, unpeeled, medium-sized apple (100 grams):',
        nutritionList: 
            {
                Calories: 52,
                Water: '86%',
                Protein: '0.3 grams',
                Carbs: '13.8 grams',
                Sugar: '10.4 grams',
                Fiber: '2.4 grams',
                Fat: '0.2 grams'
            }
        

    },
    papaya: {
        heading: 'Papaya',
        img: papaya,
        description: 'Papayas, also known as papaws or pawpaws, contain a range of nutrients, such as antioxidants and potassium. Eating papaya may help reduce the risk of heart disease, diabetes, cancer, and more.',
        benefits: [
            'Age-related macular degeneration',
            'Asthma prevention',
            'Cancer',
            'Bone health',
            'Diabetes',
            'Digestion',
            'Heart disease',
            'Inflammation',
            'Skin and healing',
            'Hair health'
        ],
        nutritionDescription: 'Papayas are an excellent source of vitamin C, and one single medium fruit provides 224 percent of recommended daily intake.One medium papaya has approximately:',
        nutritionList: 
            {
                Calories: 120,
                Protein: '2 grams',
                Carbs: '30 grams',
                Fiber: '5 grams',
                Sugar: '18 grams'
            }
        
    },
    cherry: {
        heading: 'Cherry',
        img: cherry,
        description: 'Cherries contain a number of beneficial nutrients, such as vitamin C and antioxidants. Some evidence suggests that they may also help lower inflammation, protect heart health, and improve sleep as part of a healthy diet.',
        benefits: [
            'Inflammation',
            'Gout',
            'Heart health',
            ' Benefits for sleep',
            'Benefits for exercise recovery',
        ],
        nutritionDescription: `Cherries are small stone fruits that come in a variety of colors and flavors.All varieties are highly nutritious and packed with fiber, vitamins, and minerals.
        One cup (154 grams) of sweet, raw, pitted cherries provides :`,
        nutritionList: 
            {
                Calories: 97,
                Protein: '2 grams',
                Carbs: '25 grams',
                Fiber: '3 grams',
            }
        
    },
    mangoes: {
        heading: 'Mangoes',
        img: mangoes,
        description: 'Mangoes are sweet, creamy fruits that have a range of possible health benefits. The nutrients they contain may help boost eye, skin, and hair health and prevent cancer and heart disease.',
        benefits: [
            'Age-related macular degeneration',
            'Cancer',
            'Diabetes',
            'Heart disease ',
            'Skin and hair',
        ],
        nutritionDescription: `Many people love mango — not only because it’s delicious but also because it’s very nutritious.
        One cup (165 grams) of fresh mango provides :`,
        nutritionList: 
            {
                Calories: 99,
                Protein: '1.4 gram',
                Carbs: '24.7 grams',
                Fiber: '2.6 grams',
                Fat: '0.6 grams',
                Sugar: '22.5 grams'
            }
        
    },
    watermelon: {
        heading: 'Watermelon',
        img: watermelon,
        description: 'Watermelon provides various health benefits, including hydration and essential nutrients.',
        benefits: [
            'Asthma prevention',
            'Blood pressure',
            'Cancer',
            'Digestion and regularity',
            'Hydration',
            'Brain and nervous system',
            ' Muscle soreness',
            'Skin',
            'Metabolic syndrome',
            'Diuretic properties'
        ],
        nutritionDescription: `Watermelon contains a variety of nutrients, including potassium, magnesium, and vitamins A and C. It’s also relatively low in calories, containing just 46 per cup (152 grams).
        Here are the nutrients in 1 cup (152 grams) of raw, diced watermelon:`,
        nutritionList: 
            {
                Calories: 46,
                Protein: '0.9 gram',
                Carbs: '11.5 grams',
                Fiber: '0.6 grams',
                Fat: '0.2 grams',
                Sugar: '9.4 grams'
            }
        
    },
    pineapple: {
        heading: 'Pineapple',
        img: pineapple,
        description: 'Pineapple is a tropical and nutritious fruit. While more research is necessary, pineapple may possess many health benefits, such as treating digestive problems and inflammation.',
        benefits: [
            'Age-related macular degeneration',
            'Asthma prevention',
            'Blood pressure',
            'Cancer',
            'Diabetes ',
            'Digestion',
            'Fertility',
            ' Healing and Inflammation',
            'Heart health',
            'Skin'
        ],
        nutritionDescription: 'Pineapples are low in calories but boast an impressive nutrient profile. Just 1 cup (165 grams) of pineapple chunks contains the following nutrients :',
        nutritionList: 
            {
                Calories: 83,
                Protein: '1 gram',
                Carbs: '21.6 grams',
                Fiber: '2.3 grams',
                Fat: '1.7 grams'
            }
        
    }
}


export default FruitsArray;
