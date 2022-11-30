﻿// <auto-generated />
using System;
using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Elementos_Quimicos.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221130043545_RemoveFieldInFamily")]
    partial class RemoveFieldInFamily
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.17");

            modelBuilder.Entity("API.Models.Element", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("EletronicConfiguration")
                        .HasColumnType("TEXT");

                    b.Property<int>("FamilyId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Symbol")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Z")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("FamilyId");

                    b.ToTable("Elements");
                });

            modelBuilder.Entity("API.Models.Family", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("SpecificName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Families");
                });

            modelBuilder.Entity("API.Models.Element", b =>
                {
                    b.HasOne("API.Models.Family", "Family")
                        .WithMany()
                        .HasForeignKey("FamilyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Family");
                });
#pragma warning restore 612, 618
        }
    }
}
