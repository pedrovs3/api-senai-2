# Mostra todos os databases no BD
show databases; 

# Exclui o database e toda a sua estrutura de tabelas e dados
drop database dbcontatos20222;

# Cria um database no BD
create database db_lion_school;

# Permite ativar a utilizaçao de um database
use db_lion_school;

# Mostra as tabelas criadas dentro do database
show tables;

create table tbl_aluno (
	id int UNSIGNED not null auto_increment primary key,
    nome varchar(80) not null,
    foto varchar(100) not null,
    sexo varchar(1),
    rg varchar(15) not null,
    cpf varchar(18) not null,
    email varchar(256) not null,
    telefone varchar(18),
    celular varchar(18),
    data_nascimento date not null,
    unique index(id)
);

create table tbl_course (
	id int UNSIGNED not null auto_increment primary key,
    nome varchar(80) not null,
    carga_horaria int not null,
    icone varchar(100),
    sigla varchar(10),
    unique index(id)
);

create table tbl_aluno_curso (
	id int unsigned not null auto_increment primary key,
    id_aluno int unsigned not null,
    id_curso int unsigned not null,
    matricula varchar(15) not null,
    status_aluno varchar(10) not null,
    
    # Programação para definir uma chave estrangeira
    foreign key (id_aluno) # Define qual o atributo será uma FK
		references tbl_aluno (id), # Define de onde virá a PK
	foreign key (id_curso)
		references tbl_course(id),
	unique index(id)
);

#Permite visualizar todos os dados de todas as colunas de uma tabela
select * from tbl_aluno;

# Inserir dados dentro de uma tabela
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('Pedrovs', 'https://img.icons8.com/clouds/452/user.png', 'M', '55-547.715-0', '493.166.368-09', 'pedrovs@teste.com', '(11)99021-6755', '*', '2005-08-03');
    
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('Enzow', 'https://img.icons8.com/clouds/452/admin-settings-male.png', 'M', '55-544.725-6', '493.166.368-09', 'enzow@teste.com', '(11)99021-6755', '*', '2006-01-15');

# Permite alterar o valor de um atributo da tabela
	#obs : Sempre deve ser especificado o registro na qual será alterado (geralmente a PK)
update tbl_aluno set rg = '35.567.23-4' where id = 1;

# Permite apagar um registro da tabela ( Sempre deve estar identificado o Id)
delete from tbl_aluno where id = 2;