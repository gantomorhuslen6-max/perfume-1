import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/database.js';
import AboutContent from '../models/AboutContent.js';

// Load environment variables
dotenv.config();

const seedAboutContent = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('Connected to MongoDB');

    // Clear existing content
    await AboutContent.deleteMany({});
    console.log('Cleared existing about content');

    // Seed data
    const aboutContentData = [
      {
        section: 'brand',
        title: 'Бидний брэнд',
        subtitle: 'цаг хугацаанаас үл хамаарах сонгодог.',
        content: 'Гоо сайхны орц ашиглан, хүчтэй болон цогц найрлагатай, дээд зэргийн урлагийн чанартай - баян, цэвэр үнэртний таашаалд зориулсан. Хааны Их Британий түүхийг ирээдүйн хараатай хослуулан цаг хугацаанаас гадуур зогсох. Өндөр илэрхийлэлтэй, өвөрмөц хувийн үнэртэн - өөрийгөө илэрхийлэх хамгийн дээд хэлбэр.',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0658/6433/5618/files/about-intro-img_480x480.png?v=1667396732',
        order: 0,
        isActive: true
      },
      {
        section: 'story',
        title: 'Бидний түүх эхэлсэн газар',
        subtitle: '1999 онд Clive Christian OBE - 1872 онд үүссэн алдартай Crown Perfumery компанийг худалдаж авсан.',
        content: 'Clive Christian-ийн алдартай цуглуулгууд нь компанийн үнэртний баян түүхийг ирээдүйн хараатай бүтээлчээр хослуулдаг. Манай өвөг дээдсийн өв нь манай алдартай титэмдээр илэрхийлэгддэг бөгөөд энэ эрхийг анх 1872 онд Queen Victoria өөрөө Crown Perfumery компанид олгосон.\n\nОдоо ч Clive Christian үнэртний бүх савныг тодорхойлдог дүрс болох Queen Victoria-гийн титэмийг үнэртний бүх таг дээр бахархалтайгаар зогсож байгааг харж болно. Энэ бол талархлын илэрхийлэл болгон өгсөн байнгын дурсгал бөгөөд Их Британий хамгийн агуу хаант засаглалын нэгтэй байсан маш онцгой хувийн харилцааг тэмдэглэдэг.',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0658/6433/5618/files/left_480x480.jpg?v=1667396926',
        order: 0,
        isActive: true
      },
      {
        section: 'features',
        title: 'Манай үнэртний онцлог',
        subtitle: 'Clive Christian зөвхөн онцгой концентрацитай үнэртэн үйлдвэрлэдэг.',
        content: 'Урт хугацааны сэтгэгдэл болон хэрэглэгчид гүнзгий туршлага өгөхөд зориулж сав бүрт 20% эсвэл түүнээс дээш үнэртний тос агуулдаг. Манай холимог нь үнэртний ертөнцөд өвөрмөц цогц чанартай. Clive Christian үнэртэн бүрт 120-аас 300 хүртэл өөр орц олддог.\n\nЭнэ цогц чанар нь хэрэглэгч бүрт өвөрмөц туршлага үүсгэдэг, хэрэглэгчийн арьсанд хөгжиж буй үнэр - жинхэнэ өөрийгөө илэрхийлэх. Зөвхөн хамгийн сайхан орцуудыг ашигладаг, энэ нь төгс хөгжүүлсэн 50 жилийн Энэтхэгийн сандал мод, хамгийн төгс дамаск сарнай, хамгийн ховор шафран эсвэл хамгийн сүүлийн үеийн үнэртний технологи байх эсэхээс үл хамааран.',
        order: 0,
        isActive: true
      },
      {
        section: 'unique',
        title: 'Өвөрмөц сонгодог',
        subtitle: 'Clive Christian дэлхийн хамгийн сайхан үнэртэн үйлдвэрлэдэг',
        content: 'Манай анхны цуглуулга зэрэг бүтээлч сонгодогуудыг Addictive Arts цувралынхаа шинэлэг шийдлүүдтэй хослуулсан баян нюанстай портфолио бүхий Clive Christian нь жинхэнэ, цаг хугацаанаас үл хамаарах урлагийн болон баян, цогц үнэртнийг үнэлдэг хүмүүст зориулсан.\n\nГоо сайхны орц ашиглан, хүчтэй болон цогц найрлагатай, дээд зэргийн урлагийн чанартай - баян, цэвэр үнэртний таашаалд зориулсан. Хааны Их Британий түүхийг ирээдүйн хараатай хослуулан цаг хугацаанаас гадуур зогсох. Өндөр илэрхийлэлтэй, өвөрмөц хувийн үнэртэн - өөрийгөө илэрхийлэх хамгийн дээд хэлбэр.',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0680/9514/8334/files/02_0fcb4aaf-778a-4a83-9ab6-9c73042e6a41.jpg?v=1673874033',
        order: 0,
        isActive: true
      },
      {
        section: 'subscribe',
        title: 'Бүртгүүлэх',
        subtitle: 'Мэдээ болон онцгой саналын талаар анх мэдэх',
        content: 'Хайрцаг сонгосноор би Clive Christian-аас хувийн сурталчилгааны мессеж болон саналыг хүлээн авахыг зөвшөөрч байна. Энэ мэдээллийг и-мэйл, SMS, утас эсвэл шуудангаар илгээж болно. Хэзээ ч биднээс сурталчилгааны үйл ажиллагааг зогсоохыг хүсэж болно.\n\nДэлгэрэнгүй мэдээллийг манай нууцлалын бодлогоос үзнэ үү',
        order: 0,
        isActive: true
      }
    ];

    // Insert seed data
    const createdContent = await AboutContent.insertMany(aboutContentData);
    console.log(`Successfully seeded ${createdContent.length} about content items`);

    // Display created content
    createdContent.forEach((content: any, index: number) => {
      console.log(`${index + 1}. ${content.section} - ${content.title}`);
    });

    console.log('About content seeding completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('Error seeding about content:', error);
    process.exit(1);
  }
};

// Run the seed function
seedAboutContent();
