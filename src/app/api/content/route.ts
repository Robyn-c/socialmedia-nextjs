const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit sit amet risus pharetra faucibus. Integer nec odio nec libero condimentum suscipit. Proin sed ligula nunc. Vivamus eget justo vel metus semper tempor. Sed vel enim sit amet nibh lobortis consectetur ut ac sem. Quisque nec efficitur lectus. Integer nec lacinia ipsum. Cras tincidunt bibendum quam eget egestas. Ut vestibulum velit id dolor bibendum, nec posuere nisi euismod."
  },
  {
    title: "Dolor Sit Amet",
    slug: "dolor-sit-amet",
    content: "Dolor sit amet, consectetur adipiscing elit. Vivamus vel justo eu ligula faucibus suscipit. Integer porta, lectus vel convallis molestie, metus orci lacinia lectus, vitae fermentum felis magna vitae sapien. Morbi id turpis fermentum, condimentum eros id, euismod libero. Sed scelerisque mauris a elit suscipit, nec tristique turpis tempor. Pellentesque nec purus vitae arcu venenatis ultricies. Aliquam non placerat arcu."
  },
  {
    title: "Nulla Blandit",
    slug: "nulla-blandit",
    content: "Nulla blandit, mi nec blandit fermentum, augue leo rhoncus justo, sit amet tristique sapien purus non metus. Proin aliquet felis in risus vulputate, in dignissim justo posuere. Maecenas eget sollicitudin purus. Quisque mattis dui vel elit blandit fringilla. Morbi tempor, nunc at efficitur luctus, elit tortor condimentum libero, et suscipit dui tortor eu nibh. Ut hendrerit lorem a sapien euismod, a commodo purus fermentum."
  }
]

import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET() {

  const session = await getServerSession();

  return NextResponse.json(posts);
}