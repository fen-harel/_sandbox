use std::io;

fn main() -> ()
{
    println!("Hello, world!");
    let index = input_n();
    println!("index ~~> {index}");
    let index_int: u32 = "32".parse().expect("Lmao wat did u expect");
    println!("THIS IS index_int ~~> {index_int}")
}

fn input_n() -> String
{
    let mut user_n = String::new();

    io::stdin().read_line(&mut user_n).expect("PANICCCC");
    user_n
}
