import *as $ from 'jquery'
import Post from './Post'
import './styles/style.css'
import json from './assets/test.json'
import flag from './assets/flag.png'

const post = new Post  ('Webpack Post Title', flag)

$('pre').html(post.toString())
