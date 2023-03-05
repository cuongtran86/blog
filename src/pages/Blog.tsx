import React from 'react'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='blog'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Cuong Tran</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <Link to={`/delete?id=2`}>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Pellentesque eu tincidunt tortor aliquam nulla. Risus nec feugiat in fermentum posuere urna. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Auctor neque vitae tempus quam pellentesque nec nam. Et tortor consequat id porta nibh venenatis cras sed felis. Ullamcorper a lacus vestibulum sed arcu non. Odio ut sem nulla pharetra diam. Ultricies lacus sed turpis tincidunt id.</p>
          <p>In egestas erat imperdiet sed euismod nisi. Facilisis mauris sit amet massa vitae tortor condimentum. Habitant morbi tristique senectus et netus et malesuada fames. Ultricies integer quis auctor elit. Massa id neque aliquam vestibulum morbi blandit cursus. Dolor sed viverra ipsum nunc. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Arcu odio ut sem nulla pharetra diam. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Praesent semper feugiat nibh sed pulvinar proin. Amet consectetur adipiscing elit pellentesque. Elementum pulvinar etiam non quam lacus. Eget duis at tellus at urna condimentum mattis pellentesque. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Volutpat blandit aliquam etiam erat. Faucibus a pellentesque sit amet porttitor eget. Adipiscing elit duis tristique sollicitudin nibh. Aliquam sem et tortor consequat id porta nibh venenatis.</p>
          <p>Lacus vel facilisis volutpat est velit. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sed enim ut sem viverra aliquet eget sit amet. Sit amet commodo nulla facilisi nullam. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Arcu dui vivamus arcu felis bibendum ut tristique et. Consequat semper viverra nam libero justo laoreet. Porta lorem mollis aliquam ut porttitor. Aenean sed adipiscing diam donec adipiscing tristique risus. Integer vitae justo eget magna fermentum. Cursus in hac habitasse platea dictumst quisque sagittis. Neque sodales ut etiam sit amet. Urna nunc id cursus metus aliquam eleifend mi in. Velit egestas dui id ornare. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Imperdiet dui accumsan sit amet nulla facilisi. Velit scelerisque in dictum non consectetur a erat nam.</p>
          <p>Diam quam nulla porttitor massa id. Rhoncus est pellentesque elit ullamcorper dignissim cras. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Integer enim neque volutpat ac tincidunt vitae semper. Augue eget arcu dictum varius duis at consectetur. Consectetur lorem donec massa sapien faucibus et molestie. Sed cras ornare arcu dui vivamus arcu felis. Pulvinar elementum integer enim neque. Pharetra diam sit amet nisl suscipit adipiscing. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Commodo quis imperdiet massa tincidunt nunc. Accumsan lacus vel facilisis volutpat. Morbi leo urna molestie at. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Aliquam ut porttitor leo a diam. Nam libero justo laoreet sit amet cursus sit amet dictum. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a.</p>
          <p>Ipsum nunc aliquet bibendum enim facilisis. Posuere ac ut consequat semper viverra nam libero justo laoreet. Mauris pharetra et ultrices neque. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Nibh sed pulvinar proin gravida hendrerit. Arcu bibendum at varius vel pharetra. Ipsum dolor sit amet consectetur adipiscing elit ut. Vitae congue eu consequat ac felis donec et. Faucibus interdum posuere lorem ipsum. Faucibus pulvinar elementum integer enim neque volutpat.</p>
        </p>
      </div>

      <Menu />
    </div>
  )
}

export default Blog