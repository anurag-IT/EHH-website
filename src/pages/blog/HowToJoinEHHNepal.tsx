import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "how-to-join-ehh-nepal")!;

const HowToJoinEHHNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Why Join EHH Nepal?</h2>
    <p>
      Are you a student in Nepal who cares about the environment and your community? Do you want to do something meaningful — something that goes beyond textbooks and exams? If so, <strong>EHH Nepal (Earth for Human and Humanity)</strong> is the place for you.
    </p>
    <p>
      EHH Nepal is not just an organization — it is a movement. A movement of thousands of young Nepalis who have decided that waiting for someone else to fix our environmental and humanitarian challenges is not good enough. We plant trees, run awareness campaigns, help communities in need, and build the skills and networks that will define Nepal's future leadership.
    </p>
    <p>
      Joining EHH Nepal means joining Nepal's most impactful youth-led environmental initiative. It means connecting with like-minded students from across all 77 districts. And it means making a real, measurable difference — starting today.
    </p>

    <h2>Who Can Join EHH Nepal?</h2>
    <p>
      EHH Nepal is open to any student in Nepal, regardless of:
    </p>
    <ul>
      <li>Your school or college — government, private, or community school</li>
      <li>Your grade level — from secondary school (Grade 9+) to undergraduate and postgraduate</li>
      <li>Your district — we have active or emerging chapters across all 77 districts of Nepal</li>
      <li>Your background — all castes, ethnicities, genders, and socioeconomic backgrounds are welcome</li>
      <li>Your knowledge of environmental science — beginners are just as welcome as experts</li>
    </ul>
    <p>
      The only requirement is a genuine desire to contribute to Nepal's environmental and humanitarian mission. Everything else, we will teach you.
    </p>

    <h2>What Will You Do as an EHH Nepal Member?</h2>
    <p>
      As a member of EHH Nepal, you will have the opportunity to participate in a wide range of meaningful activities:
    </p>

    <h3>Tree Plantation Drives</h3>
    <p>
      Join organized tree plantation events in your district. Learn about native tree species, proper planting techniques, and the ecological importance of forests. Every tree you plant is a direct contribution to Nepal's climate resilience. Read more in our article on{" "}
      <Link to="/blog/tree-plantation-nepal">tree plantation in Nepal</Link>.
    </p>

    <h3>Environmental Awareness Campaigns</h3>
    <p>
      Help spread climate awareness in your school and community. EHH Nepal provides resources, training, and support to help you run effective awareness campaigns — on topics from climate change to waste management to biodiversity conservation.
    </p>

    <h3>Community Clean-Up Events</h3>
    <p>
      Organize or participate in community clean-up drives in your area. EHH Nepal clean-up events tackle plastic pollution in rivers, public spaces, tourist areas, and residential neighbourhoods.
    </p>

    <h3>Humanitarian Service</h3>
    <p>
      EHH Nepal goes beyond environmental work. As a member, you may also participate in humanitarian service campaigns — helping vulnerable communities, supporting disaster relief efforts, and addressing social inequalities in your district. Learn more in our article on{" "}
      <Link to="/blog/humanitarian-aid-nepal-students">humanitarian aid in Nepal</Link>.
    </p>

    <h3>Leadership Development</h3>
    <p>
      EHH Nepal invests in its members. Through workshops, training sessions, and mentorship from senior members and external experts, you will develop leadership, communication, project management, and environmental skills that will serve you throughout your career.
    </p>

    <h3>National Network</h3>
    <p>
      As a member of EHH Nepal, you join a national network of students across all 77 districts. This network opens doors — to friendships, mentorships, internships, and collaborative projects that can transform your educational and professional journey.
    </p>

    <h2>How to Join EHH Nepal: Step-by-Step Guide</h2>
    <p>
      Joining EHH Nepal is simple and completely free. Here is the process:
    </p>
    <ol>
      <li>
        <strong>Step 1: Visit the Join Section</strong><br />
        Go to the <a href="/#join">Join EHH Nepal</a> section on our homepage.
      </li>
      <li>
        <strong>Step 2: Fill in Your Details</strong><br />
        Provide your full name, the name of your school or college, and your district. This helps us connect you with the right local chapter or set up a new one in your area.
      </li>
      <li>
        <strong>Step 3: Submit Your Registration</strong><br />
        Click submit! Your registration is instantly recorded in our national database. You will receive a confirmation.
      </li>
      <li>
        <strong>Step 4: Connect with Your Local Chapter</strong><br />
        Our team will reach out to you and connect you with EHH Nepal members in your district. If you are among the first to join from your area, we will help you establish your school's local EHH chapter.
      </li>
      <li>
        <strong>Step 5: Start Making a Difference</strong><br />
        Attend your first event, meet your fellow members, and start contributing to Nepal's environmental and humanitarian mission!
      </li>
    </ol>

    <h2>Frequently Asked Questions About Joining EHH Nepal</h2>

    <h3>Is there any fee to join EHH Nepal?</h3>
    <p>
      No. Joining EHH Nepal is completely free. We believe that financial barriers should never prevent a passionate young Nepali from contributing to their country's environmental future.
    </p>

    <h3>Do I need any prior experience in environmental work?</h3>
    <p>
      Not at all. EHH Nepal welcomes beginners. We provide all the training, resources, and support you need to become an effective environmental and humanitarian volunteer.
    </p>

    <h3>How much time do I need to commit?</h3>
    <p>
      EHH Nepal is flexible. You can contribute as much or as little time as your studies allow. Even participating in one tree plantation event or one awareness campaign per month makes you a valuable member of our movement.
    </p>

    <h3>What if there is no EHH Nepal chapter in my school yet?</h3>
    <p>
      Even better! If you are the first to register from your school, you have the opportunity to become a <strong>Chapter Founder</strong> — helping establish EHH Nepal's presence in your institution. Our team will support you every step of the way.
    </p>

    <h3>Can teachers or parents join EHH Nepal?</h3>
    <p>
      Teachers are particularly welcome as EHH Nepal Advisors — helping to guide and support student chapters within their schools. Parents can support by encouraging their children to participate and by volunteering for community events.
    </p>

    <h2>Your Country Needs You</h2>
    <p>
      Nepal is at a crossroads. The environmental and humanitarian challenges we face are real and urgent. But the energy, creativity, and passion of Nepal's young people are equal to those challenges.
    </p>
    <p>
      EHH Nepal exists to channel that energy into action. Every member who joins makes us stronger. Every chapter that opens brings our 77-district mission closer to reality. Every tree planted, every community helped, every student inspired — it all adds up to something extraordinary.
    </p>
    <p>
      Don't wait. <a href="/#join">Join EHH Nepal today</a> and be part of the movement that is shaping Nepal's future.
    </p>
  </BlogArticleLayout>
);

export default HowToJoinEHHNepal;
